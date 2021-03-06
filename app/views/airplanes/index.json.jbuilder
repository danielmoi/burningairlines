json.array!(@airplanes) do |airplane|
  json.extract! airplane, :id, :name, :rows, :columns
  json.url airplane_url(airplane, format: :json)
end
