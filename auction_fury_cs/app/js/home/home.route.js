'use strict';
module.exports = angular
  .module('app.home.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({ 
	  name: 'main.home',
	  url: 'home', 
	  template: '<home></<home>' 
	  });
  });