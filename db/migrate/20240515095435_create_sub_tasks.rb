class CreateSubTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :sub_tasks do |t|
      t.string :title
      t.text :description
      t.date :due_date
      t.integer :completed

      t.timestamps
    end
  end
end
