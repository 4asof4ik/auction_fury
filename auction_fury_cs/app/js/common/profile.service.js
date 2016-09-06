var angular = require('angular');

var userResource  = require('./user.services.js');

module.exports = angular
  .module("user.service", [
      userResource.name])
  .factory("UserService",UserService);

UserService.$inject = ['userResource'];
function UserService(userResource){
  var service = {};
  service.getUser = getUser;
  service.updateUser = updateUser;
  return service;

    function getUser(id){
      return userResource.get({id:id}).$promise
        .then(function(response){
          return response;
        });
    }

    function updateUser(id,user){
      return userResource.update({id:id},user).$promise
        .then(function(response){
          return response;
        });
    }
}
