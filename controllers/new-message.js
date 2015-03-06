EmailClient.NewMessageController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var message = this.get('model');
      message.save();

      var controller = this;
      message.get('email').then(function(email) {
        email.save();
        controller.transitionToRoute('email', email);
      });
    }
  }
});

