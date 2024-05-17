# spec/controllers/api/v1/task_controller_spec.rb
require 'rails_helper'

RSpec.describe Api::V1::TaskController, type: :controller do
  let(:user) { create(:user) }
  let(:task) { create(:task, user: user) }
  let(:headers) { { 'Authorization' => "Bearer #{user.auth_token}" } }

  before do
    allow(controller).to receive(:authenticate_api_v1_user!).and_return(true)
    allow(controller).to receive(:current_api_v1_user).and_return(user)
  end

  describe "GET #index" do
    context "when user is authenticated" do
      before do
        request.headers.merge!(headers)
        get :index
      end

      it "returns a success response" do
        expect(response).to have_http_status(:success)
      end

      it "returns the tasks" do
        expect(json_response[:data][:task]).not_to be_empty
      end
    end

    context "when an error occurs" do
      before do
        allow(user).to receive(:task).and_raise(StandardError, "Something went wrong")
        get :index
      end

      it "returns an error response" do
        expect(response).to have_http_status(:internal_server_error)
      end

      it "returns an error message" do
        expect(json_response[:message]).to eq("Failed to retrieve tasks")
      end
    end
  end

  describe "GET #show" do
    context "when task exists" do
      before do
        request.headers.merge!(headers)
        get :show, params: { id: task.id }
      end

      it "returns a success response" do
        expect(response).to have_http_status(:success)
      end

      it "returns the task" do
        expect(json_response[:data][:task][:id]).to eq(task.id)
      end
    end

    context "when task does not exist" do
      before do
        get :show, params: { id: 999 }
      end

      it "returns a not found response" do
        expect(response).to have_http_status(:not_found)
      end

      it "returns an error message" do
        expect(json_response[:message]).to eq("Task not found")
      end
    end

    context "when an error occurs" do
      before do
        allow(user.task).to receive(:find).and_raise(StandardError, "Something went wrong")
        get :show, params: { id: task.id }
      end

      it "returns an error response" do
        expect(response).to have_http_status(:internal_server_error)
      end

      it "returns an error message" do
        expect(json_response[:message]).to eq("Failed to retrieve task")
      end
    end
  end

  def json_response
    JSON.parse(response.body, symbolize_names: true)
  end
end
