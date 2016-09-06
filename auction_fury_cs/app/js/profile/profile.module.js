var profileComponent  = require('./components/profile.component.js'),
  profileRoute = require('./profile.route'),
  profileResources = require('../common/user.services.js'),
  profileService = require('../common/profile.service.js'),
  profileConstants = require('./services/constant.service'),
  loginService = require('../common/login.service.js');

module.exports = angular.module("app.profile", [
  profileComponent.name,
  profileRoute.name,
  profileResources.name,
  profileService.name,
  profileConstants.name,
  profileConstants.name,
  loginService.name
]);


