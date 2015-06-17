;(function (){

  'use strict';

  app.Views.Main = Backbone.View.extend({

    className: 'main',

    events: {
      'submit #addFriend' : 'addFriend'
    },

    template: hbs.main,

    initialize: function (options) {
      var args = options || {};
      this.collection = args.collection;
      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      this.$el.html(this.template({ person: this.collection.toJSON() }));
    },

    addFriend: function(e) {
      e.preventDefault();

      var self = this,
          form = $(event.target),
          firstName = form.find('#firstName').val(),
          lastName = form.find('#lastName').val(),
          nickname = form.find('#nickname').val(),
          notes = form.find('#notes').val(),
          image = form.find('#image').val();



      var f = new app.Models.Friend ({
        firstName: firstName,
        lastName: lastName,
        nickname: nickname,
        notes: notes,
        image: image
      });



      this.collection.add(f).save().success( function () {
        self.render();
      });

      }

    });

}());














