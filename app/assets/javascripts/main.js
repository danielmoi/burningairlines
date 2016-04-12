var app = app || {};

$(document).ready(function() {

  // instantiate our flights
  app.flights = new app.Flights();

  // get flights from SERVER
  app.flights.fetch();
  
  app.router = new app.AppRouter();
  Backbone.history.start();
});
