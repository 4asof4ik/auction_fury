'use strict';

module.exports = angular
  .module('app.categories.route', [])
  .config(function($stateProvider){
    $stateProvider.state({
      name: 'dashboard.categories',
      url: '/categories',
      template: '<categories></categories>'
    });
});
  