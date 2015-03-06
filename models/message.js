Olsport.Lot = DS.Model.extend({
  subject: DS.attr(),
  body: DS.attr(),
  email: DS.belongsTo('email', {async: true}),
});
