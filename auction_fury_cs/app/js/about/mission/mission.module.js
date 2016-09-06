var angular = require('angular'),
    missionComponent = require('./components/mission.component.js'),
    missionRoute     = require('./mission.route.js');


module.exports = angular.module('app.about.mission', [

    missionComponent.name,
    missionRoute.name

  ]);
