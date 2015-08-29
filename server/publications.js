// Publish user details
Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find(
    	{_id: this.userId}, // Query on id
		{fields: {'services': 1}}); // Return additional fields
  } else {
    this.ready();
  }
});