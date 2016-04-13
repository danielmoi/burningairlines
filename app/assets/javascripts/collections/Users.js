var app = app || {};

app.Users = Backbone.Collection.extend({

  url: '/users',

  model: app.User,

  initialize: function() {
    console.log('new Users collection initialized');
  }

});
