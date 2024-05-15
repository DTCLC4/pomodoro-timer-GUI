class SubTaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :due_date, :completed

  belongs_to :task
end
