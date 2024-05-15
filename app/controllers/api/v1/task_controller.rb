class Api::V1::TaskController < ApplicationController
  before_action :authenticate_api_v1_user!
  before_action :set_user

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
    @task = @user.tasks.find(params[:id])

    render json: {
      status: "success",
      code: 200,
      message: "Task retrieved successfully",
      data: {
        task: ActiveModelSerializers::SerializableResource.new(@task, include: ['user'])
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

  private

  def set_user
    @user = current_api_v1_user
  end
end
