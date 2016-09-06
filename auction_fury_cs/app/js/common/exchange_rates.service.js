var angular = require('angular');

module.exports = angular
    .module("admin.exchange_rates.service", [])
    .factory("ExchangeRatesService", ExchangeRatesService);

ExchangeRatesService.$inject = ['ExchangeRatesResource'];
function ExchangeRatesService(ExchangeRatesResource) {
  return {
    getRates: function (id) {
      return ExchangeRatesResource.get({id:id}).$promise.then(function(response){
        return response;
      });
    },
    updateRates: function(id, rate) {
       return ExchangeRatesResource.update({id:id}, rate).$promise.then(function(response){
         return response;
       });
    }
  };
}
