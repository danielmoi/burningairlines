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
flight6 = Flight.create({ flight_number: 'BA109', origin: 'SYD', destination: 'LHR', departure_date: '2016-04-30'});
flight7 = Flight.create({ flight_number: 'BA109', origin: 'JFK', destination: 'SFO', departure_date: '2016-04-03'});
flight8 = Flight.create({ flight_number: 'BA109', origin: 'CDG', destination: 'HNL', departure_date: '2016-04-07'});
flight9 = Flight.create({ flight_number: 'BA109', origin: 'BOM', destination: 'HND', departure_date: '2016-04-16'});
flight10 = Flight.create({ flight_number: 'BA109', origin: 'SYD', destination: 'LHR', departure_date: '2016-04-04'});
flight11 = Flight.create({ flight_number: 'BA109', origin: 'CDG', destination: 'HNL', departure_date: '2016-04-25'});
flight12 = Flight.create({ flight_number: 'BA109', origin: 'BER', destination: 'AUH', departure_date: '2016-04-23'});
flight13 = Flight.create({ flight_number: 'BA109', origin: 'LIS', destination: 'GIG', departure_date: '2016-04-24'});

Airplane.destroy_all
airplane1 = Airplane.create({ name: 'Flame', rows: 5, columns: 8 });
airplane2 = Airplane.create({ name: 'Firestorm', rows: 10, columns: 6 });
airplane3 = Airplane.create({ name: 'Candle', rows: 8, columns: 5 });

airplane1.flights << flight1 << flight7
airplane1.flights << flight2 << flight8
airplane2.flights << flight3 << flight9
airplane2.flights << flight4 << flight10
airplane3.flights << flight5 << flight11
airplane3.flights << flight6 << flight12 << flight13

User.destroy_all
user1 = User.create({ username: 'admin', email: 'admin@ga.com', password: 'chicken', admin: true });
user2 = User.create({ username: 'happy', email: 'happy@happy.com', password: 'chicken', admin: false });
user3 = User.create({ username: 'aruna', email: 'aruna@ga.com', password: 'chicken', admin: false });
user4 = User.create({ username: 'rany', email: 'rany@ga.com', password: 'chicken', admin: false });
user5 = User.create({ username: 'dani', email: 'dani@ga.com', password: 'chicken', admin: false });
user6 = User.create({ username: 'sam', email: 'sam@ga.com', password: 'chicken', admin: false });
user7 = User.create({ username: 'jenn', email: 'jenn@ga.com', password: 'chicken', admin: false });
user8 = User.create({ username: 'jack', email: 'jack@ga.com', password: 'chicken', admin: false });
user9 = User.create({ username: 'joel', email: 'joel@ga.com', password: 'chicken', admin: false });
user10 = User.create({ username: 'chirs', email: 'chirs@ga.com', password: 'chicken', admin: false });

user1.flights << flight1
user2.flights << flight1
user3.flights << flight1
user4.flights << flight1
user5.flights << flight1

user1.flights << flight2
user2.flights << flight2
user3.flights << flight3
user4.flights << flight4
user5.flights << flight4

user5.flights << flight2
user6.flights << flight2
user7.flights << flight2
user8.flights << flight2
user9.flights << flight2

user1.flights << flight3
user2.flights << flight3
user3.flights << flight3
user4.flights << flight3
user5.flights << flight4
