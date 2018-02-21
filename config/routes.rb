Rails.application.routes.draw do
  get '/users' => 'users#index'
  post '/users' => 'users#create'
  get '/users/:id' => 'users#show'
  patch '/users/:id' => 'users#update'
  delete '/users/:id' => 'users#destroy'

  get '/requests' => 'requests#index'
  post 'requests' => 'requests#create'
  get '/requests/:id' => 'requests#show'
  patch '/requests/:id' => 'requests#update'
  patch '/requests/:id/accept' => 'requests#accept'
  delete '/requests/:id' => 'requests#destroy'

  post 'user_token' => 'user_token#create'
  post 'users' => 'users#create'

  # get '/created_requests' => 'created_requests#index'
  # post '/created_requests' => 'created_requests#create'
  # delete '/created_requests/:id' => 'created_requests#destroy'
  
end
