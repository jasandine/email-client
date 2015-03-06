EmailClient.MessageRoute = Ember.Route.extend({
  model: function(pararms) {
    return this.store.find('message', params.message_id)
  }
});