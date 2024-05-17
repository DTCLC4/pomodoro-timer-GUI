FactoryBot.define do
  factory :task do
    title { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph }
    due_date { Faker::Date.forward(days: 23) }
    completed { 0 }
    association :user
    created_at { Time.current }
    updated_at { Time.current }
  end
end
