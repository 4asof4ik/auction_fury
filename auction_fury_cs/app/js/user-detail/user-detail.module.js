var userComponent = require('./components/user-detail.component.js'),
  userRoute = require('./user-detail.route.js'),
  profileResources = require('../common/user.services.js'),
  profileService = require('../common/profile.service.js');

module.exports = angular.module("userDetail.module",[
  userComponent.name,
  userRoute.name,
  profileResources.name,
  profileService.name
]);