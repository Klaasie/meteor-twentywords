Router.onBeforeAction(function(){
	if (! Meteor.userId()) {
		this.layout('applicationlogin');
		this.render('login');
		$('body').addClass('login');
	} else {
		this.next();
	}
});

Router.route('/', function () {
	if($('body').hasClass('login')){
		$('body').removeClass('login');
	}

	this.layout('application');
	this.render('menuright', {to: "nav-right"});
	this.render('home');
});

Router.route('/profile', function(){
	this.layout('application');
	this.render('menuright', {to: "nav-right"});
	this.render('profile');
})