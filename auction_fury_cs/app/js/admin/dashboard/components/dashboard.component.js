module.exports = angular
  .module('app.dashboard.component', [])
  .component('dashboard', {
    templateUrl: 'app/js/admin/dashboard/components/dashboard.template.html',
    controller: DashboardController,
    transclude: true
  });

  function DashboardController() {
      var ctrl = this;
  };

