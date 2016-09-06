module.exports = angular
  .module('app.currency.component', [])
  .component('currency', {
  	templateUrl: 'app/js/admin/currency/components/currency.template.html',
  	controller: CurrencyController
  });


CurrencyController.$inject = ['$filter', 'CurrencyResource', 'ExchangeRatesResource', 'ExchangeRatesService'];
function CurrencyController($filter, CurrencyResource, ExchangeRatesResource, ExchangeRatesService) {
  ctrl = this;
  ctrl.message = 'Update complete'
  ctrl.is_update = false;
  ctrl.editing = false;
  ctrl.exchangeRates = [];
  ctrl.ratesCollection = [];
  ctrl.edit = edit;
  ctrl.searchRates = searchRates;

   function searchRates(searchDate) {
     var dates = $filter('date')(searchDate, 'fullDate');
     ExchangeRatesResource.get({date: dates}).$promise.then(suc, error);
   }

  function edit(rate) {
    ExchangeRatesService.updateRates(rate.id, rate).then(handleSuccess, error);
  }
  CurrencyResource.get().$promise.then(success, error);
  ExchangeRatesResource.get().$promise.then(suc, error);

  function handleSuccess(data) {
    ctrl.is_update=true;
  }

  function suc(data) {
    ctrl.exchangeRates = data.exchange_rates;
    ctrl.ratesCollection = data.exchange_rates;
  }

  function success(data) {
    ctrl.currrencies = data.currencies;
  }

  function error(response) {
    ctrl.responseMessage = response.status;
  };
}
