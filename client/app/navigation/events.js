Template.menuright.events({
	"click #home": function(){
		Router.go('/');
	},
	"click #profile": function() {
		Router.go('/profile');
	},
	"click #logout": function() {
		Meteor.logout();
	}
});