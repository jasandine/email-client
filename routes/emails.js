EmailClient.EmailsRoute = Ember.Route.extend({
  beforeModel: function() {
    this.store.push('email', {
      id: 1,
      sender: "platinumcustomerservice@comcast.com",
      subject: "Your Bill Is $100,000",
      body: "Dear valued customer, we at Comcast are pleased to inform you that you have a humble balance of $100,000. If you have and questions regarding this bill, please call us at 1-800-MNO-POLY"
    });
    this.store.push('email', {
      id: 2,
      sender: "trent@trimet.com",
      subject: "Introducing New Real Time Tracker",
      body: "Dear valued customer, we at Trimet are pleased to inform you that we are currently in the works developing a real game changing transit tracking application. Here's how it will work, you type in your current location as well as your desired location, within seconds the application will present a middle finger image to you along with a tagline of are currently in the works developing a real game changing transit tracking application. Here's how it will work, you type in your current location as well as your desired location, within seconds the application will present a middle finger image to you along with a tagline of 'What did you expect? REAL TIME?!?!LOLZ', early polling suggests this will be the most accurate real time device for our Trimet system."
    });
  },
  model: function() {
    return this.store.find('email');
  }
});
