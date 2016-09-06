var angular = require('angular');

var coreServices  = require('./core.services.js');

module.exports = angular
  .module("auctions.services", [
    coreServices.name,
    require('angular-resource')])
  .factory("auctionsResource",auctionsResource);

auctionsResource.$inject = ['$resource','appSettings'];
function auctionsResource($resource,appSettings){
        return $resource(appSettings.SERVER_PATH + "auctions/:id.json",null,
          {
            'update': {method:'PUT'}
            });
  }
