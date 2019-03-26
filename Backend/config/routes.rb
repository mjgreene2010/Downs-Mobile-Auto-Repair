Rails.application.routes.draw do
  resources :services
  resources :users
  resource :auth, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
