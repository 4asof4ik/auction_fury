module.exports = angular
  .module('app.usertable.component', [])
  .component('usertable', {
    templateUrl: 'app/js/admin/usertable/components/usertable.template.html',
    controller: UsertableController,
  });

UsertableController.$inject =['$state','userResource','ApproveService','DeleteConstants', 'ApproveConstants'];
  function UsertableController($state,userResource,ApproveService, DeleteConstants, ApproveConstants) {
    var ctrl = this;
    ctrl.users = [];
    ctrl.usersCollection = [];
    ctrl.totalUsers = ApproveConstants.TOTAL_USERS;
    ctrl.usersPerPage = ApproveConstants.USERS_PER_PAGE;
    ctrl.current_page = ApproveConstants.CURRENT_PAGE;
    ctrl.confirmationMessage = ApproveConstants.CONFIRMATION_MESSAGE;
    ctrl.user = ApproveService.getData();
    getResultsPage(1);

    ctrl.pageChanged = function (current_page) {
      getResultsPage(current_page);
    };

    function getResultsPage(current_page) {
      userResource.get({current_page: current_page})
        .$promise.then(success, error);

      function success(data) {
        ctrl.users = data.users;
        ctrl.usersCollection = data.users;
        ctrl.totalUsers = data.total_entries;
        ctrl.pagination = data.current_page;
      };

      function error(response) {
        ctrl.responseMessage = response.status;
      };
    };

    ctrl.deleteUser = function (id) {
      var confirmation = confirm(ApproveConstants.CONFIRMATION_MESSAGE + id);
      ctrl.responseMessage = '';
      if (confirmation === true) {
        userResource.remove({id: id}).$promise.then(success, error);
      }

      function success(data, current_page) {
        ctrl.responseMessage = DeleteConstants.USER_DELETED_MESSAGE;
      };

      function error(response) {
        ctrl.responseMessage = response.status;
      };
    };

    ctrl.getUser = function (id) {
      userResource.get({id: id}).$promise.then(success, error);

      function success(data) {
        ApproveService.setData(data);
      };

      function error(response) {
        console.log(response.status);
      };
    };
  }
