var app = app || {};

app.FlightReservationView = Backbone.View.extend({

  initialize: function() {


  },

  el: '#main',

  events: {
    'click #flight-reserve': 'reserveSeat',
    'click .seats__col': 'saveDetails'
  },

  seat: {},

  saveDetails: function(event) {
    $('.seats__col').not('.taken').empty();
    this.seat = {};
    if($(event.currentTarget).text() !== '') {
      return;
    }

    // app.magic_users = new app.Users();
    // app.magic_users.fetch().done(function() {
    //   console.log('magic_users: ' + app.magic_users);
    //   app.magic_user = app.magic_users.at(0);
    //
    // });


    $(event.currentTarget).html(app.current_user.username);
    console.log(event.currentTarget.dataset.seatId);
    this.seat.seat_id = event.currentTarget.dataset.seatId;
    this.seat.flight_id = this.model.id;
    this.seat.user_id = app.current_user.id;

  },
  renderTaken: function(something) {



    var usersForFlight = app.flights.get(this.model.id).attributes.users;

    var userNames = {};
    var usersDetails = _.each(usersForFlight, function(element) {
      var key = element.id; // user_id
      userNames[key] = element.username;
    });

    var reservations = this.model.attributes.reservations;

    var takenSeats = _.map(reservations, function(element) {
      return [element.seat_id, element.user_id];
    });

    _.each(takenSeats, function(element) {
      // var userName = users.find(element[1]);
      var userName = userNames[element[1]];
      console.log(userName);
      $('.seats__col[data-seat-id=' + element[0] + ']').html(userName).addClass('taken');
    });

  },

  reserveSeat: function(event) {


    if (_.isEmpty(this.seat)) {
      console.log('this seat is taken');
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

    var arrLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var rowNumbers = this.model.attributes.airplane.rows;
    var cols = this.model.attributes.airplane.columns;

    $('#flight-reservation').prepend('<h2>Choose your seat for the flight</h2>');

    var $row = $('<div>', { class: 'seats__row' });
    var $col = $('<div>', { class: 'seats__col--label' });
    $row.append( $col );

    _.times(cols, function(col) {
      var $col = $('<div>', { class: 'seats__col--label', html: (col + 1) });
      $row.append( $col );
    });
    $('#flight-seats__headings--columns').append($row);


    _.times(rowNumbers, function(rowNumber) {
      var rowLetter = arrLetters[rowNumber];
      var $row = $('<div>', { class: 'seats__row' });
      var $col = $('<div>', { class: 'seats__row--label', html: rowLetter});
      $row.append($col);


      _.times(cols, function(col) {
        var $col = $('<div>', { class: 'seats__col', 'data-seat-id': rowLetter + (col + 1) });
        $row.append( $col );
      });
      $('#flight-seats').append( $row );
    });

    this.renderTaken();

    $('.button-container').append('<button id="flight-reserve" class="btn">Confirm Reservation</button>');
  }
});
