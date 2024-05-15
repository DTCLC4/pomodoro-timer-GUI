class SubTask < ApplicationRecord
  enum completed: { not_started: 0, in_progress: 1, completed: 2 }

  belongs_to :task
end
