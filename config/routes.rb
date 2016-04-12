Rails.application.routes.draw do
  root :to => 'pages#welcome'
  get 'session/new'
  get 'flights/home' => 'flights#home'
  resources :reservations

  resources :airplanes
  resources :flights
  resources :users
  get '/signup' => 'users#new'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'





end
