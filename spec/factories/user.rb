FactoryBot.define do
  factory :user do
    provider { "email" }
    uid { "" }
    encrypted_password { Devise::Encryptor.digest(User, 'password') }
    reset_password_token { nil }
    reset_password_sent_at { nil }
    allow_password_change { false }
    remember_created_at { nil }
    confirmation_token { nil }
    confirmed_at { nil }
    confirmation_sent_at { nil }
    unconfirmed_email { nil }
    name { Faker::Name.name }
    nickname { Faker::Internet.username }
    image { Faker::Avatar.image }
    email { Faker::Internet.email }
    tokens { {} }
    created_at { Time.current }
    updated_at { Time.current }
  end
end
