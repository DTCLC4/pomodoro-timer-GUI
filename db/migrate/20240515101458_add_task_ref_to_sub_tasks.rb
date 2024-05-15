class AddTaskRefToSubTasks < ActiveRecord::Migration[7.1]
  def change
    add_reference :sub_tasks, :task, foreign_key: true
  end
end
