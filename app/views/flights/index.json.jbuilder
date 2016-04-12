json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_number, :origin, :destination, :departure_date
  json.url flight_url(flight, format: :json)
end
