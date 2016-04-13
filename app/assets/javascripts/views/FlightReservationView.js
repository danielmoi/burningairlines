var app = app || {};

app.FlightReservationView = Backbone.View.extend({

  el: '#flight-reservation',

  events: {
    'click #flight-reserve': 'reserveSeat',
    'click .seats__col': 'saveDetails'
  },

  seat: {},

  saveDetails: function(event) {
    this.seat.seat_id = event.currentTarget.dataset.seatId;
    this.seat.flight_id = this.model.id;
    this.seat.user_id = app.current_user.id;
    console.log(this.seat);
  },

  reserveSeat: function(event) {
    // console.log(event.currentTarget.dataset.seatId); // reservation.seat_id
    // console.log(this.model.id); // reservation.flight_id
    // console.log(app.current_user.id); // reservation.user_id
    // console.log(this.model.get('users'));
    // this.model.reservation
    // Create a new reservation model
    console.log('click');
    if (_.isEmpty(this.seat)) {
      return;
    }

    app.reservation = new app.Reservation({
      user_id: this.seat.user_id,
      flight_id: this.seat.flight_id,
      seat_id: this.seat.seat_id
    });
    console.log(app.reservation.toJSON());
    app.reservation.save();

  },

  render: function(flight) {

    $('#flight-seats').empty();
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
