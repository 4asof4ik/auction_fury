var angular = require('angular');

module.exports = angular
  .module("approveconst.service", [])
  .constant("ApproveConstants",{'USERS_PER_PAGE':'15', 
  'CONFIRMATION_MESSAGE': 'Please double check before deleting User with ID: ',
  'CURRENT_PAGE': '1', 'TOTAL_USERS': '0'});


