EmailClient.Router.map(function(){
  this.resource('emails', {path: '/'});
  this.resource('email', {path: 'email/:email_id'}, function() {
    this.resource('new-message');
  });
});
