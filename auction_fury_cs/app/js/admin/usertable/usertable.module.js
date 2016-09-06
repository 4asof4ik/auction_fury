var usertableController = require('./components/usertable.component.js'),
    usertableRoute      = require('./usertable.route.js'),
    approveModule       = require('./approve/approve.module.js'),
    deleteConstants     = require('./services/deleteconst.service'),
    approveConstants    = require('./services/approveconst.service'),
    usertableResources  = require('../../common/user.services.js');

module.exports = angular.module('app.usertable', [
 'app.usertable.component',
  usertableRoute.name,
  approveModule.name,
  deleteConstants.name,
  approveConstants.name,
  usertableResources.name
]);
