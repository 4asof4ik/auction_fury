var angular = require('angular'),
    contactComponent = require('./components/contact.component.js'),
    contactService   = require('./components/contact.service.js'),
    contactRoute     = require('./contact.route.js');

module.exports = angular.module('app.contact', [

	contactComponent.name,
  contactRoute.name,
  contactService.name
	]);
