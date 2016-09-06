var currencyComponent     = require('./components/currency.component.js'),
    currencyService       = require('../../common/currency.service.js'),
    exchangeRatesService  = require('../../common/exchange_rates.service.js'),
    exchangeRatesResource = require('./components/exchange_rates.resource.js'),
    currencyRoute         = require('./currency.route.js');


module.exports = angular.module('app.currency', [
  'app.currency.component',

   currencyRoute.name,
   currencyService.name,
   exchangeRatesService.name,
   exchangeRatesResource.name
]);
