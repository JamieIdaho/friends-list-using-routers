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
    },

    homepage: function () {
      new app.Views.Main({
      collection: this.collection
      });
    },

    singleFriend: function (id) {
      new app.Views.SingleView({
        singleID: id,
        collection: this.collection
      });
    }


  });

}());
