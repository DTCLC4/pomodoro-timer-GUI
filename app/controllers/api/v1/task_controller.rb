class Api::V1::TaskController < ApplicationController
  before_action :authenticate_api_v1_user!
  before_action :set_user
  before_action :set_task, only: [:show, :update, :destroy]

  # GET /tasks/
  def index
    @tasks = @user.tasks

    render json: {
      status: "success",
      code: 200,
      message: "Tasks retrieved successfully",
      data: {
        tasks: ActiveModelSerializers::SerializableResource.new(@tasks, include: ['user'])
      }
    }
  rescue StandardError => e
    logger.error("Failed to retrieve tasks: #{e.message}")
    render json: {
      status: "error",
      code: 500,
      message: "Failed to retrieve tasks"
    }, status: :internal_server_error
  end

  # GET /task/:id
  def show
    render json: {
      status: "success",
      code: 200,
      message: "Task retrieved successfully",
      data: {
        task: ActiveModelSerializers::SerializableResource.new(@task, include: ['user', 'sub_tasks'])
      }
    }
  rescue ActiveRecord::RecordNotFound
    render json: {
      status: "error",
      code: 404,
      message: "Task not found"
    }, status: :not_found
  rescue StandardError => e
    logger.error("Failed to retrieve task: #{e.message}")
    render json: {
      status: "error",
      code: 500,
      message: "Failed to retrieve task"
    }, status: :internal_server_error
  end

  # PUT /task/:id
  def update
    if @task.update(task_params)
      render json: {
        status: "success",
        code: 200,
        message: "Task updated successfully",
        data: {
          task: ActiveModelSerializers::SerializableResource.new(@task, include: ['user', 'sub_tasks'])
        }
      }
    else
      render json: {
        status: "error",
        code: 422,
        message: "Failed to update task",
        errors: @task.errors.full_messages
      }, status: :unprocessable_entity
    end
  rescue StandardError => e
    logger.error("Failed to update task: #{e.message}")
      render json: {
        status: "error",
        code: 500,
        message: "Failed to update task"
      }, status: :internal_server_error
  end

  # DELETE /tasks/:id
  def destroy
    if params[:confirm] != "yes"
      render json: {
        status: "error",
        code: 400,
        message: "Confirmation required to delete task"
      }, status: :bad_request
      return
    end

    if @task.destroy
      render json: {
        status: "success",
        code: 200,
        message: "Task and its sub-tasks deleted successfully"
      }
    else
      render json: {
        status: "error",
        code: 422,
        message: "Failed to delete task"
      }, status: :unprocessable_entity
    end
  rescue StandardError => e
    logger.error("Failed to delete task: #{e.message}")
    render json: {
      status: "error",
      code: 500,
      message: "Failed to delete task"
    }, status: :internal_server_error
  end

  private

  def set_user
    @user = current_api_v1_user
  end

  def set_task
    @task = @user.tasks.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :description, :due_date, :completed)
  end
end
