class Task < ApplicationRecord
  enum completed: { not_started: 0, in_progress: 1, completed: 2 }

  belongs_to :user
  has_many :sub_tasks, dependent: :destroy

  validates :title, presence: true, length: { minimum: 5 }
  validates :description, presence: true, length: { minimum: 5 }

end
