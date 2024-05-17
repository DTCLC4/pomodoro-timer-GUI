class Task < ApplicationRecord
  enum completed: { not_started: 0, in_progress: 1, completed: 2 }

  belongs_to :user
  has_many :sub_tasks, dependent: :destroy

  validates :title, presence: true, length: { minimum: 5 }
  validates :description, presence: true, length: { minimum: 5 }

end


# validates :due_date, presence: true
  # validate :due_date_cannot_be_in_the_past
  # validate :completed_transition

  # private

  # def due_date_cannot_be_in_the_past
  #   if due_date.present? && due_date < Date.today
  #     errors.add(:due_date, "can't be in the past")
  #   end
  # end

  # def completed_transition
  #   return if completed.blank? || new_record?

  #   previous_task = Task.find(id)
  #   previous_status = previous_task.completed_was
  #   current_status = completed

  #   if completed_status_invalid?(previous_status, current_status)
  #     errors.add(:completed, "transition is invalid")
  #   end
  # end

  # def completed_status_invalid?(previous_status, current_status)
  #   return true if previous_status.nil? || current_status.nil?

  #   previous_index = Task.completed[previous_status]
  #   current_index = Task.completed[current_status]

  #   current_index < previous_index
  # end
