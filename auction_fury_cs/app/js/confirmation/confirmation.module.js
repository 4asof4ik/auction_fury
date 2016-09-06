var confirmationComponent = require('./components/confirmation.component.js'),
  confirmationServices = require('./services/confirmation.services'),
  loginService = require('../common/login.service.js'),
  confirmationRoute = require('./confirmation.route.js'),
  coreServices  = require('../common/core.services.js');

module.exports = angular.module("app.confirmation", [
  confirmationComponent.name,
  confirmationServices.name,
  confirmationRoute.name,
  loginService.name,
  coreServices.name
]);
