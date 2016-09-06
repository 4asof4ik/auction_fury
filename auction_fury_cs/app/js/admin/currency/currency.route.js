'use strict';

module.exports = angular
  .module('app.currency.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
      name: 'dashboard.currency',
      url: '/currency',
      template: '<currency></currency>'
   });
});
  