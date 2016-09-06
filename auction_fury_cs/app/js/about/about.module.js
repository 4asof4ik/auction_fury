var angular = require('angular'),
    aboutComponent = require('./components/about.component.js'),
    aboutRoute     = require('./about.route.js'),
    teamModule     = require('./team/team.module.js'),
    projectModule  = require('./project/project.module.js'),
    missionModule  = require('./mission/mission.module.js');


module.exports = angular.module('app.about', [

    aboutComponent.name,
    aboutRoute.name,
    teamModule.name,
    projectModule.name,
    missionModule.name
	]);
