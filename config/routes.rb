Rails.application.routes.draw do
  get 'flights/home' => 'flights#home'
  resources :reservations
  resources :airplanes
  resources :flights
  resources :users



end
