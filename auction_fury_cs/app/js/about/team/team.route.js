'use strict';
module.exports = angular
  .module('app.about.team.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
    name: 'main.about.team',
    url: '/team',
    template: '<team></<team>'
    });
  });
