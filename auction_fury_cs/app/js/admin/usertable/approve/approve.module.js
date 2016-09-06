var approveComponent = require('./components/approve.component.js'),
  approveRoute     = require('./approve.route.js'),
  approveService   = require('../../../common/approve.service.js'),
  userResource     = require('../../../common/user.services.js'),
  userConstants    = require('./services/userconstant.service');
module.exports = angular.module('app.approve', [
  'app.approve.component',
  approveRoute.name,
  approveService.name,
  userResource.name,
  userConstants.name,
]);
