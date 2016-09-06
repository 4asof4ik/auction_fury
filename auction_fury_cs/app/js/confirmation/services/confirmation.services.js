'use strict';
module.exports = angular
  .module('app.confirmation.services', [])
  .factory('ConfirmationService', ConfirmationService);
ConfirmationService.$inject = ['$http', 'appSettings'];
function ConfirmationService($http, appSettings){
  var service = {};
  service.Confirm = Confirm;
  return service;

  function Confirm(token){
    return $http({
                   url: appSettings.SERVER_PATH + 'users/confirmation.json',
                   method: "GET",
                   params: {confirmation_token: token}
                 });
  }
}
