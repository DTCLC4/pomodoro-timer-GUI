require_relative '../config/environment'

begin
  if ActiveRecord::Base.connection.active?
    puts 'Successfully connection to database!'
  else
    puts 'Failed connection to database!'
  end
rescue StandardError => e
  puts "Failed connection to database!: #{e.message}"
end
