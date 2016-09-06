var angular = require('angular');

module.exports = angular
  .module("userconstant.service", [])
  .constant("UserConstants",{'APPROVE_SUCCESS_MESSAGE':'The role was successfully granted!'});

