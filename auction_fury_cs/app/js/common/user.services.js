var angular = require('angular');

var coreServices  = require('./core.services.js');

module.exports = angular
  .module("user.services", [
    coreServices.name,
    require('angular-resource')])
  .factory("userResource",userResource);

userResource.$inject = ['$resource','appSettings'];
function userResource($resource,appSettings){
        return $resource(appSettings.SERVER_PATH + "users/:id.json",null,
            {
                'update': {method:'PUT'}
            });
    }
