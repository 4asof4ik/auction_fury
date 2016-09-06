module.exports = angular
  .module('app.approve.component', [])
  .component('approve', {
    templateUrl: 'app/js/admin/usertable/approve/components/approve.template.html',
    controller: ApproveController
  });

ApproveController.$inject =['userResource','ApproveService','$state', 'UserConstants'];
  function ApproveController(userResource,ApproveService, $state, UserConstants) {
    ctrl = this;
    ctrl.user = ApproveService.getData();
    
    ctrl.backButton = function() {
    $state.go('dashboard.usertable');
    };

    ctrl.ApproveUser = function(id, user, approve) {
      ctrl.responseMessage = '';
      ApproveService.approveUser(id, user, approve).then(success, error);
      function success(data) {
        ctrl.responseMessage = UserConstants.APPROVE_SUCCESS_MESSAGE;
        ctrl.user = data.user;
      };

      function error(response) {
      ctrl.responseMessage = response.status;
      };
    };
};
  