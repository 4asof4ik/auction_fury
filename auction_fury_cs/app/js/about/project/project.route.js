'use strict';
module.exports = angular
  .module('app.about.project.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
    name: 'main.about.project',
    url: '/project',
    template: '<project></<project>'
    });
  });
