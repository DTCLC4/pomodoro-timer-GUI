FactoryBot.define do
  factory :sub_task do
    sequence(:title) { |n| "Sub Task #{n}" }
    description { "This is a sub task" }
    due_date { Date.today }
    completed { SubTask.completed.keys.sample }
    association :task
  end
end
