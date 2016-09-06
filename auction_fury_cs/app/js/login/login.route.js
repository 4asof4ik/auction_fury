'use strict';
module.exports = angular
  .module('app.login.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
	    name: 'main.login',
	    url: 'login',
	    template: '<login></login>'
	  });
  });
