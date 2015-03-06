EmailClient.NewMessageRoute = Ember.Route.extend({
  model: function(params) {
    var email = this.modelFor('email');
    var message = this.store.createRecord('message');
    email.get('messages').then(function(messages) {
      messages.pushObject(message);
    });
    return message;
  }
});