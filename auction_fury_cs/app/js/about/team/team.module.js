var angular = require('angular'),
    teamComponent = require('./components/team.component.js'),
    teamRoute     = require('./team.route.js');


module.exports = angular.module('app.team', [

    teamComponent.name,
    teamRoute.name

  ]);
