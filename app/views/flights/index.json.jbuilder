json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_number, :origin, :destination, :departure_date, :airplane, :users, :reservations
  json.url flight_url(flight, format: :json)
end
