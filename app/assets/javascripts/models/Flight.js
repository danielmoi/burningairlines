var app = app || {};

app.Flight = Backbone.Model.extend({
  // this is how we can use parse to REDUCE the model data available
  // parse: function (data) {
  // },
  urlRoot: '/flights'
});
