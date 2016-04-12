var app = app || {};

app.FlightReservationView = Backbone.View.extend({

  el: '#flight-seats',

  events: {
    'click .seats__col': 'displaySeatID'
  },

  displaySeatID: function(event) {
    console.log(event.currentTarget.dataset.seatId);
  },

  render: function(flight) {
    this.$el.empty();
    $('#flight-seats__heading').text('Seats');
    console.log('flightReservationView initiated');
    var arrLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var rowNumbers = this.model.attributes.airplane.rows;
    var cols = this.model.attributes.airplane.columns;

    _.times(rowNumbers, function(rowNumber) {
      var rowLetter = arrLetters[rowNumber];

      var $row = $('<div>', { class: 'seats__row' });
      _.times(cols, function(col) {
        var $col = $('<div>', { class: 'seats__col', 'data-seat-id': rowLetter + (col + 1) });
        $row.append( $col );
      });
      $('#flight-seats').append( $row );
    });
  }

});
