'use strict';
module.exports = angular
  .module('app.about.mission.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
    name: 'main.about.mission',
    url: '/mission',
    template: '<mission></<mission>'
    });
  });
