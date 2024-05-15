class ChangeCompletedColumnTypeInTasks < ActiveRecord::Migration[7.1]
  def change
    change_column :tasks, :completed, :integer, default: 0
  end
end
