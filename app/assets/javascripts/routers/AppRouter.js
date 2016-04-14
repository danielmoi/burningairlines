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

    var searchView = new app.SearchView();
    searchView.render();

    app.flights.each(function (flight) {
      var flightView = new app.FlightView({
        model: flight
      });
      flightView.render();
      $('.flight-selected').removeClass('.flight-selected');

      // keep refreshing render of flights view
      window.setInterval(function() {
        flightView.render();
        console.log('updating flight view');
      }, 4000);

    });



  },

  flightDetails: function(param) {
    console.log(param);
    console.log(app.flights.get(param));
    var flight = app.flights.get(param);
    var flightReservationView = new app.FlightReservationView({ model: flight });
    flightReservationView.render();

    // // keep refreshing render of seats grid
    window.setInterval(function() {
      flightReservationView.renderTaken();
      // console.log('updating seats taken');
    }, 4000);
    
  },



});
