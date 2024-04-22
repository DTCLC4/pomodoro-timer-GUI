class Task < ApplicationRecord
  enum status: {doing: 0, done: 1, progress: 2}
  enum priority: {low: 0, medium: 1, high: 2}

  belongs_to :user
end
