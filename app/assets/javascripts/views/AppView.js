var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  events: {
    'click #button-search': 'magicSearch',
    'click #button-all': 'magicAll'
  },

  magicSearch: function() {
    var flightOrigin = $('#search-origin').val().trim();
    var flightDestination = $('#search-destination').val().trim();

    if (flightOrigin !== '') {
      console.log('searching');
      $('.flight-details__origin').filter(function(index, element) {
        return $(element).html() !== flightOrigin;
      }).parent().hide();
    }
    if (flightDestination !== '') {
      $('.flight-details__destination').filter(function(index, element) {
        return $(element).html() !== flightDestination;
      }).parent().hide();
    }
  },
  magicAll: function() {
    $('#flights').children().show();
  },


  render: function() {
    console.log('appView initiated');
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html( appViewTemplate );
  }
});
