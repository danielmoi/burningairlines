var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    ':id': 'flightDetails'
  },

  index: function() {
    console.log('router started');
    var appView = new app.AppView();
    appView.render();

    app.flights.each(function (flight) {
      var flightView = new app.FlightView({
        model: flight
      });
      flightView.render();
      $('.flight-selected').removeClass('.flight-selected');
    });
  },

  flightDetails: function(param) {
    console.log(param);
    console.log(app.flights.get(param));
    var flight = app.flights.get(param);
    var flightReservationView = new app.FlightReservationView({ model: flight });
    flightReservationView.render();
  }
});
