class Api::V1::SubTaskController < ApplicationController
  before_action :authenticate_api_v1_user!
  before_action :set_user
  before_action :set_task
  before_action :set_sub_task

  # GET /task/:id/subtask/:id
  def show
    render json: {
      status: "success",
      code: 200,
      message: "SubTask retrieved successfully",
      data: {
        sub_task: ActiveModelSerializers::SerializableResource.new(@sub_task, include: ['task', 'user'])
      }
    }
  rescue ActiveRecord::RecordNotFound
    render json: {
      status: "error",
      code: 404,
      message: "SubTask not found"
    }, status: :not_found
  rescue StandardError => e
    logger.error("Failed to retrieve subtask: #{e.message}")
    render json: {
      status: "error",
      code: 500,
      message: "Failed to retrieve subtask"
    }, status: :internal_server_error
  end

  private

  def set_user
    @user = current_api_v1_user
  end

  def set_task
    @task = @user.tasks.find(params[:task_id])
  end

  def set_sub_task
    @sub_task = @task.sub_tasks.find(params[:id])
  end
end
