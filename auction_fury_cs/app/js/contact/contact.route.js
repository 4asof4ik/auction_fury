'use strict';
module.exports = angular
  .module('app.contact.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({ 
	  name: 'main.contact',
	  url: 'contact', 
	  template: '<contact></contact>'
	  });
  });