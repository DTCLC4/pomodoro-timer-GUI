# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# seend tasks
# Tạo các task tương ứng với user_id = 1
5.times do
  Task.create(
    user_id: 1,
    title: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    due_date: Faker::Date.forward(days: 30),
    completed: [true, false].sample
  )
end

# Tạo các task tương ứng với user_id = 2
5.times do
  Task.create(
    user_id: 2,
    title: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    due_date: Faker::Date.forward(days: 30),
    completed: [true, false].sample
  )
end
