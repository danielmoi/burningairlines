var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'div',

  render: function() {
    console.log('flightView initiated');
    var flightNumber = this.model.get('flight_number');
    // console.log('flightNumber: ' + flightNumber);
    this.$el.text( flightNumber );
    console.log(this.$el);
    this.$el.prependTo('#flights');
  }
});
