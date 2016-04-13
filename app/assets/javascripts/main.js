var app = app || {};

$(document).ready(function() {

  if ($("#main").length === 0) {
    return false;
  }

  // instantiate our flights
  app.flights = new app.Flights();

  // get flights from SERVER
  app.flights.fetch();

  // keep updating flights collection
  // window.setInterval(function() {
  //   app.flights.fetch();
  //   console.log('updating flights collection');
  // }, 4000);

  app.router = new app.AppRouter();
  Backbone.history.start();
});
