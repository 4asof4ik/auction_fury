'use strict';
module.exports = angular
  .module('app.news.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
      name: 'main.news',
      url: 'news',
      template: '<news></news>'
    });
  });
