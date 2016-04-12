var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'div',

  render: function() {
    console.log('flightView initiated');
    var flightNumber = this.model.get('flight_number');
    this.$el.text( flightNumber );
    this.$el.prependTo('#flights');
  }
});
