source "https://rubygems.org"

ruby "3.0.2"

# ActiveModel::Serializers allows you to generate your JSON in an object-oriented and convention-driven manner.
gem "active_model_serializers", "~> 0.10.14"

# Middleware that will make Rack-based apps CORS compatible. Fork the project here: https://github.com/cyu/rack-cors
gem "rack-cors", "~> 2.0", ">= 2.0.2"

#  The bcrypt Ruby gem provides a simple wrapper for safely handling passwords.
gem "bcrypt", "~> 3.1", ">= 3.1.12"

# Faker, a port of Data::Faker from Perl, is used to easily generate fake data: names, addresses, phone numbers, etc.
gem "faker", "~> 3.2"

# Autoload dotenv in Rails.
gem "dotenv-rails", "~> 2.1", ">= 2.1.1"

# For use with client side single page apps such as the venerable
gem "devise_token_auth", git: "https://github.com/lynndylanhurley/devise_token_auth"

# A generalized Rack framework for multiple-provider authentication.
gem "omniauth", "~> 2.1", ">= 2.1.2"

# A Google OAuth2 strategy for OmniAuth 1.x. This allows you to login to Google with your ruby app.
gem "omniauth-google-oauth2", "~> 1.1", ">= 1.1.1"

# Byebug is a Ruby debugger.
gem "byebug", "~> 11.1", ">= 11.1.3"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.3", ">= 7.1.3.2"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", ">= 5.0"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", ">= 4.0.1"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mswin, :mswin64, :mingw, :x64_mingw, :jruby]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  gem "rubocop", "~> 1.26", require: false
  gem "rubocop-checkstyle_formatter", require: false
  gem "rubocop-rails", "~> 2.14.0", require: false
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: [:mri, :mswin, :mswin64, :mingw, :x64_mingw]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end
