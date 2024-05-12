class Api::V1::SessionsController < ApplicationController
  def create
    auth_hash = request.env['omniauth.auth']
    if auth_hash && auth_hash['info']
      user = User.find_or_create_by(email: auth_hash['info']['email']) do |u|
        u.name = auth_hash['info']['name']
      end

      sign_in(user)

      Rails.logger.debug "Đăng nhập thành công với email: #{user.email}"
    else
      Rails.logger.debug "Đăng nhập không thành công!"
    end
  end
end
