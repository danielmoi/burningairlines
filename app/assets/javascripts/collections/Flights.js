var app = app || {};

app.Flights = Backbone.Collection.extend({

  url: '/flights',

  model: app.Flight,

  initialize: function() {
    console.log('new Flights collection initialized');

    this.on('add', function(flight) {
      // console.log('ADD listener called ');
      var flightView = new app.FlightView({ model: flight });
      flightView.render();
    });

  }
});
