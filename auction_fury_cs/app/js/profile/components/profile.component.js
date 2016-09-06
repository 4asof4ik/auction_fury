var angular = require('angular');

module.exports = angular
  .module('app_profile_component',[])
  .component('profile', {
    bindings: {
      settings: '='
    },
    templateUrl: 'app/js/profile/components/profile.template.html',
    controller: ProfileController,
  });

ProfileController.$inject =['userResource','UserService','Auth'];
function ProfileController(userResource,UserService,Auth) {
  var ctrl = this;
  ctrl.setting = {userId: Auth.getCurrentUserId()};

  ctrl.user = UserService.getUser(ctrl.setting.userId).then(handleSuccess, handleError);
  function handleSuccess(data) {
    ctrl.user = data.user;
  };
  function handleError(data) {
    ctrl.responseMessage = response.statusText + "\r\n";
  }


  ctrl.submit = function () {

    ctrl.response_message = '';
    UserService.updateUser(ctrl.setting.userId, ctrl.user).then(handleSuccess, handleError);
    function handleSuccess(data) {
      ctrl.isUpdate = true;
      ctrl.responseMessage = ProfileConstants.UPDATE_SUCCESS_MESSAGE;
      ctrl.user = data.user;
    }

    function handleError(data) {
      ctrl.errors = response.data.errors;
    }
  }
}

