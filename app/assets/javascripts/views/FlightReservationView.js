var app = app || {};

app.FlightReservationView = Backbone.View.extend({

  el: '#flight-seats',

  render: function(flight) {
    this.$el.empty();
    $('#flight-seats__heading').text('Seats');
    console.log('flightReservationView initiated');
    var rows = this.model.attributes.airplane.rows;
    var cols = this.model.attributes.airplane.columns;

    _.times(rows, function(row) {
      var $row = $('<div>', { class: 'seats__row', 'data-seat-id': row + 1 });
      _.times(cols, function(col) {
        var $col = $('<div>', { class: 'seats__col', 'data-seat-id': col + 1 });
        $row.append( $col );
      });
      $('#flight-seats').append( $row );
    });
  }

});
