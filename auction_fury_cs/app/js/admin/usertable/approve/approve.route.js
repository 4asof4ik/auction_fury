'use strict';

module.exports = angular
  .module('app.approve.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
      name: 'dashboard.approve',
      url: '/approve',
      template: '<approve></approve>'
   });
});
  