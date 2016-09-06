module.exports = angular
  .module('app.confirmation.component', [])
  .component('confirmation', {
    templateUrl: '/app/js/confirmation/components/confirmation.template.html',
    controller: ConfirmationsController,
    transclude: true
  });

ConfirmationsController.$inject =['ConfirmationService', 'Auth', '$state', '$stateParams', 'server_statuses'];
function ConfirmationsController(ConfirmationService, Auth, $state, $stateParams, server_statuses){
  'use strict';
  var ctrl = this;
  ConfirmationService.Confirm($stateParams.confirmationToken).then(
    function(response){
      var token = {};
      token.payload_object = response.data.token;
      Auth.loginAfterConfirmation(token);
      $state.go('profile');
    },
    function(response){
      ctrl.error = {};
      if (response.status === server_statuses.NOT_FOUND || response.status === server_statuses.UNPROCESSABLE_ENTITY) {
        ctrl.error.wrongConfirmationToken = true;
      } else if (response.status == server_statuses.NO_CONNECTION) {
        ctrl.error.noConnection = true;
      }
    }
  );
}
