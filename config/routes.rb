Rails.application.routes.draw do
  root :to => 'pages#welcome'
  get 'flights/home' => 'flights#home'
  resources :reservations

  resources :airplanes
  resources :flights
  resources :users



end
