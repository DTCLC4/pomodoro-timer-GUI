# Load Bundler setup to manage gem dependencies
require 'bundler/setup'

# Require YAML to handle YAML files (like database configuration)
require 'yaml'

# Require ActiveRecord for ORM functionality
require 'active_record'

# Load all gems specified in the Gemfile
Bundler.require

# Load database configuration from a YAML file
db_config = YAML.load_file('config/database.yml', aliases: true)

# Determine the environment; default to 'development' if not set
env = ENV['RACK_ENV'] || 'development'

# Establish a connection to the database using the configuration for the current environment
ActiveRecord::Base.establish_connection(
  db_config[env]
)

# Require all files in the 'app' directory to load models and other components
require_all 'app'
