var angular = require('angular');

var coreServices = require('./core.services.js');

module.exports = angular
    .module("admin.currency.service", [
        coreServices.name,
        require('angular-resource')])
    .factory("CurrencyResource", CurrencyResource);

CurrencyResource.$inject = ['$resource','appSettings'];
function CurrencyResource($resource, appSettings){
  return $resource(appSettings.SERVER_PATH + "currencies/:id.json", null,
    {
      'update': {method:'PUT'}
    }
  );
}
