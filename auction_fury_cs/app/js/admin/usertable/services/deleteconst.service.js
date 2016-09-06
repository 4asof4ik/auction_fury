var angular = require('angular');

module.exports = angular
  .module("deleteconst.service", [])
  .constant("DeleteConstants",{'USER_DELETED_MESSAGE':'User was successfully deleted!'});

