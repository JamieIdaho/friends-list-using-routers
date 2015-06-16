;(function (){

  'use strict';

  var allFriends = new app.Collections.Friends();

  allFriends.fetch().done(function () {

    new app.Routers.MainRouter({
    collection: allFriends
  });
    Backbone.history.start();
  });

}());
