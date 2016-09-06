var angular = require('angular');

module.exports = angular
	.module('app.contact.component', [])
	.component('contact', {
		templateUrl: '/app/js/contact/components/contact.template.html',
		controller: ContactController,
	})
  .constant('SendMessge',{'EMAIL_URL': 'https://formspree.io/auction.fury.ad@gmail.com'});

ContactController.$inject = ['GoogleMaps', 'SendMessge'];
function ContactController(GoogleMaps, SendMessge) {
	var ctrl = this;
  ctrl.location = location;
  ctrl.email = SendMessge.EMAIL_URL;

  function location() {
    GoogleMaps.location();
  }
}
