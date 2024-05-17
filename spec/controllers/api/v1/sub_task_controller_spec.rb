require 'rails_helper'

RSpec.describe Api::V1::SubTaskController, type: :controller do
  let(:user) { create(:user) }
  let(:task) { create(:task, user: user) }
  let(:sub_task) { create(:sub_task, task: task) }
  let(:headers) { { 'Authorization' => "Bearer #{user.auth_token}" } }

  before do
    allow(controller).to receive(:authenticate_api_v1_user!).and_return(true)
    allow(controller).to receive(:current_api_v1_user).and_return(user)
  end

  describe "GET #show" do
    context "when sub task exists" do
      before do
        request.headers.merge!(headers)
        get :show, params: { task_id: task.id, id: sub_task.id }
      end

      it "returns a success response" do
        expect(response).to have_http_status(:success)
      end

      it "returns the sub task" do
        expect(json_response[:data][:sub_task][:id]).to eq(sub_task.id)
      end
    end

    context "when sub task does not exist" do
      before do
        request.headers.merge!(headers)
        get :show, params: { task_id: task.id, id: 999 }
      end

      it "returns a not found response" do
        expect(response).to have_http_status(:not_found)
      end

      it "returns an error message" do
        expect(json_response[:message]).to eq("SubTask not found")
      end
    end

    context "when an error occurs" do
      before do
        allow(SubTask).to receive(:find).and_raise(StandardError, "Something went wrong")
        request.headers.merge!(headers)
        get :show, params: { task_id: task.id, id: sub_task.id }
      end

      it "returns an error response" do
        expect(response).to have_http_status(:internal_server_error)
      end

      it "returns an error message" do
        expect(json_response[:message]).to eq("Failed to retrieve subtask")
      end
    end
  end

  def json_response
    JSON.parse(response.body, symbolize_names: true)
  end
end
