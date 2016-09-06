var angular = require('angular'),
    homeComponent = require('./components/home.component.js'),
    homeRoute = require('./home.route.js');

module.exports = angular.module('app.home', [

	homeComponent.name,
  homeRoute.name

	]);
