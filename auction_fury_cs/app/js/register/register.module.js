var registerComponent = require('./components/register.component.js'),
    registerService = require('./services/register.services'),
    registerRoute = require('./register.route.js'),
    coreServices  = require('../common/core.services.js');

module.exports = angular.module("app.register", [
  registerComponent.name,
  registerService.name,
  registerRoute.name,
  coreServices.name
]);
