# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# seend users
5.times do |i|
  User.create!(
    username: "user#{i+1}"
    email: Faker::Internet.email,
    password: "password", # Set a default password
    password_confirmation: "password" # Confirm the password
  )
end

# seend tasks
10.times do
  Task.create!(
    user_id: User.order("RANDOM()").first.id,
    title: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    priority: Task.priorities.keys.sample,
    due_date: Faker::Date.forward(days: 30),
    status: Task.statuses.keys.sample
  )
end
