;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {
      var args = options || {};
      this.collection = args.collection;
    },

    routes: {
      '' : 'homepage',
      'friend/:id' : 'singleFriend'
    }


  });

}());
