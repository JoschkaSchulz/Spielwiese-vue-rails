Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :leave_damages
  resources :plants
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
