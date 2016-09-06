var angular = require('angular');

module.exports = angular
	.module('app.about.component', [])
	.component('about', {
		templateUrl: '/app/js/about/components/about.template.html',
		controller: AboutController,
	});

function AboutController() {
  var ctrl = this;
}
