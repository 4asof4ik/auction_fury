'use strict';
module.exports = angular
  .module('app.register.route', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('register', {
        name: 'register',
        url: '/register',
        template: '<register></register>'
      })
      .state('registred', {
        name: 'registred',
        url: '/registred',
        templateUrl: 'app/js/register/components/registred.template.html'
      });
  });
