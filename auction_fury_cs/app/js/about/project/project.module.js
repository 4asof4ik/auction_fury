var angular = require('angular'),
    projectComponent = require('./components/project.component.js'),
    projectRoute     = require('./project.route.js');


module.exports = angular.module('app.project', [

    projectComponent.name,
    projectRoute.name

  ]);
