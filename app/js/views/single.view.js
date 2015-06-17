;(function (){

  'use strict';

  app.Views.SingleView = Backbone.View.extend({

    className: 'single',

    events: {

      'click #delete' : 'deleteFriend'

    },

    template: hbs.single,

    initialize: function (options) {
      var args = options || {};
      this.singleID = args.singleID;
      this.collection = args.collection;
      this.render();
      $('.container').html(this.el);

    },

    render: function() {
      var singleFriend = this.collection.get(this.singleID);
      this.$el.html(this.template(singleFriend.toJSON()));
    },

    deleteFriend: function (event) {
      var button = event.target;
      var modelID = $(button).data('id');
      var whichOne = this.collection.get(modelID);

      whichOne.destroy().success( function () {
        $('.container').html('Deleted!');
      });
    }

  });

}());
