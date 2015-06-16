;(function (){

  'use strict';

  app.Views.Main = Backbone.View.extend({

    className: 'main',

    template: hbs.main,

    initialize: function (options) {
      var args = options || {};
      this.collection = args.collection;
      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      this.$el.html(this.template({ person: this.collection.toJSON() }));
    }
  });

}());
