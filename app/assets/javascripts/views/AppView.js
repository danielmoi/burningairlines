var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  render: function() {
    console.log('appView initiated');
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html( appViewTemplate );
  }
});
