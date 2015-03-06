EmailClient.Email = DS.Model.extend({
  sender: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  messages: DS.hasMany('message', {async: true})
});