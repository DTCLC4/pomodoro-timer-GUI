require 'rails_helper'

RSpec.describe SubTask, type: :model do
  describe "associations" do
    it { should belong_to(:task) }
  end

  describe "enums" do
    it { should define_enum_for(:completed).with_values(not_started: 0, in_progress: 1, completed: 2) }
  end

  describe "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:due_date) }
  end

  describe "callbacks" do
    it "sets default value for completed" do
      sub_task = SubTask.new
      expect(sub_task.completed).to eq("not_started")
    end
  end
end
