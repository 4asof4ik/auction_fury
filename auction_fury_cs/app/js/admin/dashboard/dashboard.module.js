var dashboardComponent = require('./components/dashboard.component.js'),
    dashboardRoute     = require('./dashboard.route.js'),
    currencyModule     = require('../currency/currency.module.js'),
    categoriesModule   = require('../categories/categories.module.js'),
    usertableModule    = require('../usertable/usertable.module.js');
    
module.exports = angular.module("app.dashboard", [
  'app.dashboard.component',
   dashboardRoute.name,
   currencyModule.name,
   usertableModule.name,
   categoriesModule.name
]);
