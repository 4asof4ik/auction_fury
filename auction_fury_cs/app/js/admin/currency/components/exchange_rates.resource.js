var angular = require('angular');

var coreServices  = require('../../../common/core.services.js');

module.exports = angular
    .module("admin.exchange_rates.resource", [
        coreServices.name,
        require('angular-resource')])
    .factory("ExchangeRatesResource", ExchangeRatesResource);

ExchangeRatesResource.$inject = ['$resource','appSettings'];
function ExchangeRatesResource($resource, appSettings){
        return $resource(appSettings.SERVER_PATH + "exchange_rates/:id.json", null,
            {
                'update': {method:'PUT'}
            });
}
