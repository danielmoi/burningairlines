json.array!(@users) do |user|
  json.extract! user, :id, :username, :email, :password_digest, :reservations
  json.url user_url(user, format: :json)
end
