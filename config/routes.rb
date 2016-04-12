Rails.application.routes.draw do
  root :to => 'pages#welcome'
  resources :reservations

  resources :airplanes
  resources :flights
  resources :users


end
