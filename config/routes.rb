Rails.application.routes.draw do
  get 'flights' => 'flights#home'
  resources :reservations
  resources :airplanes
  resources :flights
  resources :users



end
