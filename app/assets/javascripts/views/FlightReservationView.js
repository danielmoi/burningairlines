var app = app || {};

app.FlightReservationView = Backbone.View.extend({

  el: '#flight-seats',

  events: {
    'click .seats__col': 'reserveSeat'
  },


  reserveSeat: function(event) {
    console.log(event.currentTarget.dataset.seatId); // reservation.seat_id
    console.log(this.model.id); // reservation.flight_id
    console.log(app.current_user.id); // reservation.user_id
    // console.log(this.model.get('users'));
    // this.model.reservation
    // Create a new reservation model
    app.reservation = new app.Reservation({
      user_id: app.current_user.id,
      flight_id: this.model.id,
      seat_id: event.currentTarget.dataset.seatId
    });
    console.log(app.reservation.toJSON());
    app.reservation.save();

  },

  render: function(flight) {

    this.$el.empty();
    $('#flight-seats__heading').text('Seats');
    // console.log('flightReservationView initiated');
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
