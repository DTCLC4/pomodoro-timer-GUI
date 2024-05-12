Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_SECRET"],
  {
    callback_path: "/api/v1/auth/google_oauth2/callback",
    scope: "email, profile",
    prompt: "select_account",
    image_aspect_ratio: "square",
    image_size: 50
  }
end
OmniAuth.config.allowed_request_methods = %i[get]
