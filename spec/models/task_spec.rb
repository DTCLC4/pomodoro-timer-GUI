require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "associations" do
    it { should belong_to(:user) }
    it { should have_many(:sub_tasks).dependent(:destroy) }
  end

  describe "enums" do
    it { should define_enum_for(:completed).with_values(not_started: 0, in_progress: 1, completed: 2) }
  end

  describe "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:description) }
  end

  describe "callbacks" do
    it "sets default value for completed" do
      task = Task.new
      expect(task.completed).to eq("not_started")
    end
  end
end
