'use strict';
module.exports = angular
  .module('app.about.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({ 
	  name: 'main.about',
	  url: 'about', 
	  template: '<about></<about>' 
	  });
  });