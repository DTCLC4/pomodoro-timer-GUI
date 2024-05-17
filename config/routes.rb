Rails.application.routes.draw do

  #mount_devise_token_auth_for 'User', at: 'auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check


  # Defines the root path route ("/")
  # root "posts#index"

  namespace :api do
    namespace :v1 do
      get 'home/index', to: 'home#index'

      resources :task, only: [:index], path: 'tasks'
      resources :task, except: [:index], path: 'task'
      resources :task, only: [:show], path: 'task' do
        resources :sub_task, only: [:show], path: 'subtask'
      end

      get '/auth/google_oauth2/callback', to: 'sessions#google_oauth2_callback'

      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end

end
