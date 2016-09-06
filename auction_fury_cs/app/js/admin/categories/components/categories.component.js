module.exports = angular
  .module('app.categories.component', [])
  .component('categories', {
    templateUrl: 'app/js/admin/categories/components/categories.template.html',
    controller: CategoriesController
  });
  function CategoriesController() {
    ctrl = this;
  };
  