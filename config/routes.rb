Rails.application.routes.draw do
  get 'session/new'

  resources :reservations
  resources :airplanes
  resources :flights
  resources :users
  get '/signup' => 'users#new'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'




end
