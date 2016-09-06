'use strict';
module.exports = angular
  .module('app.register.services', [])
  .factory('RegisterService', RegisterService);

RegisterService.$inject = ['userResource'];
function RegisterService(userResource){
  var service = {};
  service.Register = Register;

  return service;

  function Register(user) {
    return userResource.save( user ).$promise
      .then(function(response) {
        return response;
      });
  }
}
