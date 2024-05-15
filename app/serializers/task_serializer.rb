class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :due_date, :completed

  belongs_to :user
end
