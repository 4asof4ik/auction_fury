'use strict';
module.exports = angular
  .module('app.confirmation.route', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('confirmation', {
        name: 'confirmation',
        url: '/confirmation/{confirmationToken}',
        template: '<confirmation></confirmation>'
      })
  });
