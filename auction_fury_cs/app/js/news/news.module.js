var angular = require('angular'),
    newsComponent = require('./components/news.component.js'),
    newsRoute     = require('./news.route.js');

module.exports = angular.module('app.news', [

	newsComponent.name,
  newsRoute.name

	]);
