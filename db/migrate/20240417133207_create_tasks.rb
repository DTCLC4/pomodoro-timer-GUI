class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :title
      t.text :description
      t.date :due_date
      t.integer :status, default: 0
      t.integer :priority, default: 0
      t.string :image

      t.timestamps
    end
    add_index :tasks, :status
  end
end
