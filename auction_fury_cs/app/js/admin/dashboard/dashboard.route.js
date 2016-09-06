'use strict';

module.exports = angular
  .module('app.dashboard.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
      name: 'dashboard',
      url: '/dashboard',
      template: '<dashboard></dashboard>',
      data : {requiresLogin : true }
    });
  });
