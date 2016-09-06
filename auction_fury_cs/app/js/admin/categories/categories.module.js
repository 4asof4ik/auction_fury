var categoriesController = require('./components/categories.component.js'),
    categoriesRoute      = require('./categories.route.js');

module.exports = angular.module('app.categories', [
  'app.categories.component',
   categoriesRoute.name
]);
