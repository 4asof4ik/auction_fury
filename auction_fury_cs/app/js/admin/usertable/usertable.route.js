'use strict';

module.exports = angular
  .module('app.usertable.route', [])
  .config(function($stateProvider){
    $stateProvider.state({
      name: 'dashboard.usertable',
      url: '/usertables',
      template: '<usertable></usertable>'
    });
});
  