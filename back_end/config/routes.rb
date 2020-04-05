Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/users', to: 'users#index'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'

  post '/signup', to: 'users#create'
  post '/login', to: 'auth#login'

  get '/auto_login', to: 'auth#auto_login'

end
