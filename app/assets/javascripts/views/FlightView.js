var app = app || {};

app.FlightView = Backbone.View.extend({

  tagName: 'div',
  className: 'flight-details__row',

  events: {
    'click .flight-details__flight-number': 'displayFlight'
  },

  displayFlight: function(event) {

    // console.log(event);
    // console.log(this.model);
    console.log(this.$el);
    this.$el.addClass('flight-selected');
    $('.flight-details__row').not('.flight-selected').hide();
  },


  render: function(flight) {

    // console.log('flightView initiated');
    // console.log(this.model.attributes);

    this.model.attributes.airplane.seatsTotal = this.model.attributes.airplane.rows * this.model.attributes.airplane.columns;

    var flightViewHTML = $('#flightViewTemplate').html();
    var flightViewTemplate = _.template( flightViewHTML );
    this.$el.html( flightViewTemplate(this.model.attributes) );

    // var flightNumber = this.model.get('flight_number');
    // console.log('flightNumber: ' + flightNumber);
    // this.$el.text( flightNumber );
    // console.log(this.$el);
    this.$el.appendTo('#flights');



  }
});
