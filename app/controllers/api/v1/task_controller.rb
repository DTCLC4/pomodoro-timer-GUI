class Api::V1::TaskController < ApplicationController
  before_action :authenticate_api_v1_user!

  # GET /tasks/
  def index
    @user = current_api_v1_user
    @tasks = @user.tasks

    if @tasks
      logger.info("Tasks retrieved successfully")
      render json: {
        status: "success",
        code: 200,
        message: "Tasks retrieved successfully",
        data: {
          user: {
            id: @user.id,
            name: @user.name,
            nickname: @user.nickname,
            image: @user.image,
            email: @user.email
          },
          tasks: @tasks.map do |task|
            {
              id: task.id,
              title: task.title,
              description: task.description,
              due_date: task.due_date,
              completed: task.completed
            }
          end
        }
      }
    else
      logger.error("Failed to retrieve tasks: #{@tasks&.errors&.full_messages}")
      render json: {
      status: "error",
      code: 500,
      message: "Failed to retrieve tasks"
    }, status: :internal_server_error
    end
  end

  # GET /task/:id
  # def show
  #   @user = current_api_v1_user
  #   @task = @user.tasks.find(params[:id])
  #   render json: {
  #     status: "success",
  #     code: 200,
  #     message: "Task retrieved successfully",
  #     data: { task: @task }
  #   }
  # rescue ActiveRecord::RecordNotFound
  #   render json: {
  #     status: "error",
  #     code: 404,
  #     message: "Task not found"
  #   }, status: :not_found
  # end
end
