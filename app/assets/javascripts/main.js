var app = app || {};

$(document).ready(function() {

  if ($("#main").length === 0) {
    return false;
  }

  // instantiate our flights
  app.flights = new app.Flights();

  // get flights from SERVER
  app.flights.fetch();

  app.router = new app.AppRouter();
  Backbone.history.start();
});
