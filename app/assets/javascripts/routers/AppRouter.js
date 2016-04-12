var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    console.log('router started');
  }
});
