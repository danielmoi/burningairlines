var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'div',

  render: function(flight) {

    console.log('flightView initiated');
    console.log(this.model.attributes);

    var flightViewHTML = $('#flightViewTemplate').html();
    var flightViewTemplate = _.template( flightViewHTML );
    this.$el.html( flightViewTemplate(this.model.attributes) );

    // var flightNumber = this.model.get('flight_number');
    // console.log('flightNumber: ' + flightNumber);
    // this.$el.text( flightNumber );
    console.log(this.$el);
    this.$el.appendTo('#flights');
  }
});
