var app = app || {};
app.SearchView = Backbone.View.extend({

    events: {
        'click #searchBtn': 'searchFlight'
    },
    searchFlight: function(e) {
      console.log("SEARCH FLIGHT RUNNING");
        var userOrigin = $("#origin").val();
        var userDestination = $("#destination").val();
        var searchResults = app.flights.where({ origin: userOrigin, destination: userDestination });
        $("#flights").empty();
        for(var i=0;i<= searchResults.length ; i++){
          var flightView = new app.FlightView({ model: searchResults[i] });
          flightView.render();
        }
    },
    tagName: 'div',
    render: function(flight) {
        var searchViewHTML = $('#appSearchTemplate').html();
        this.$el.addClass("searchDiv");
        this.$el.html(searchViewHTML);
        $("#main").prepend(this.$el);

  }
});
