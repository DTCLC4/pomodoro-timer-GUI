class Api::V1::SessionsController < ApplicationController
  def google_oauth2_callback
    auth_hash = request.env['omniauth.auth']
    if auth_hash && auth_hash['info']
      user = User.find_or_create_by(email: auth_hash['info']['email']) do |u|
        u.name = auth_hash['info']['name']
      end

      sign_in(user)

      Rails.logger.debug "Successfully logged in with email: #{user.email}"
    else
      Rails.logger.debug "Login unsuccessful!"
    end
  end
end
