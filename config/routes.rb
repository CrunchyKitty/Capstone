Rails.application.routes.draw do
  get '/users' => 'users#index'
  get '/users/nannies' => 'users#nannies'
  post '/users' => 'users#create'
  post '/users/images' => 'users#image'
  get '/users/:id' => 'users#show'
  get '/profile' => 'users#profile'
  patch '/users/:id' => 'users#update'
  delete '/users/:id' => 'users#destroy'

  # get '/requests' => 'requests#index'
  post '/requests' => 'requests#create'
  get '/requests/:id' => 'requests#show'
  patch '/requests/:id' => 'requests#update'
  patch '/requests/:id/accept' => 'requests#accept'
  delete '/requests/:id' => 'requests#destroy'

  post 'user_token' => 'user_token#create'
  post 'users' => 'users#create'

  get '/profiles/:current_user' => 'users#show' 
  
end
