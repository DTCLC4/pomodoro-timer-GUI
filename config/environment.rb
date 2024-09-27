require 'bundler/setup'
require 'yaml'
require 'active_record'
Bundler.require

db_config = YAML.load_file('config/database.yml', aliases: true)

env = ENV['RACK_ENV'] || 'development'

ActiveRecord::Base.establish_connection(
  db_config[env]
)

require_all 'app'
