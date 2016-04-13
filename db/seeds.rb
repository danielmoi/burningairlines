# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Flight.destroy_all
flight1 = Flight.create({ flight_number: 'BA432', origin: 'SYD', destination: 'LHR', departure_date: '2016-04-11'});
flight2 = Flight.create({ flight_number: 'BA122', origin: 'JFK', destination: 'SFO', departure_date: '2016-04-10'});
flight3 = Flight.create({ flight_number: 'BA765', origin: 'LIS', destination: 'GIG', departure_date: '2016-04-18'});
flight4 = Flight.create({ flight_number: 'BA264', origin: 'BOM', destination: 'HND', departure_date: '2016-04-20'});
flight5 = Flight.create({ flight_number: 'BA980', origin: 'CDG', destination: 'HNL', departure_date: '2016-04-24'});
flight6 = Flight.create({ flight_number: 'BA109', origin: 'BER', destination: 'AUH', departure_date: '2016-04-30'});

Airplane.destroy_all
airplane1 = Airplane.create({ name: 'Flame', rows: 5, columns: 8 });
airplane2 = Airplane.create({ name: 'Firestorm', rows: 10, columns: 6 });
airplane3 = Airplane.create({ name: 'Candle', rows: 8, columns: 5 });

airplane1.flights << flight1
airplane1.flights << flight2
airplane2.flights << flight3
airplane2.flights << flight4
airplane3.flights << flight5
airplane3.flights << flight6

User.destroy_all
user1 = User.create({ username: 'admin', email: 'admin@ga.com', password: 'chicken', admin: true });
user2 = User.create({ username: 'happy', email: 'happy@happy.com', password: 'chicken', admin: false });
user3 = User.create({ username: 'a', email: 'a@a.com', password: 'chicken', admin: false });
user4 = User.create({ username: 'b', email: 'b@b.com', password: 'chicken', admin: false });
user5 = User.create({ username: 'c', email: 'c@c.com', password: 'chicken', admin: false });

# user1.flights << flight1
# user2.flights << flight1
# user3.flights << flight1

Reservation.destroy_all
r1 = Reservation.create({ user_id: user1.id, flight_id: flight1.id, seat_id: 'A2' })
r2 = Reservation.create({ user_id: user2.id, flight_id: flight1.id, seat_id: 'A3' })
