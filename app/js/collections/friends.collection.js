;(function (){

  'use strict';

  app.Collections.Friends = Backbone.Collection.extend({

    model: app.Models.Friend,

    comparator: 'lastName',

    url: app.rootURL

  });

}());
