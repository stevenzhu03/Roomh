Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/users', to: 'users#index'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'
  post '/signup', to: 'users#create'
  post '/user/:id/upload_img', to: 'users#upload_img'
  
  post '/login', to: 'auth#login'
  get '/auto_login', to: 'auth#auto_login'
  
  post '/match/create', to: 'matches#create'
  post '/match/confirm', to: 'matches#confirm'

  # Real Time Chat Messaging
  resources :chat_rooms, only: [:index, :create, :show]
  resources :messages, only: [:create]
  
end
