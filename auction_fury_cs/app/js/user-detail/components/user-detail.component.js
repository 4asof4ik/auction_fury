var angular = require('angular');

module.exports = angular
  .module('userDetail',[])
  .component('userDetail',{
    templateUrl: './app/js/user-detail/components/user-detail.template.html',
    controller: UserDetailController,
  });

UserDetailController.$inject = ['userResource','UserService','$stateParams'];

function UserDetailController(userResource,UserService,$stateParams){

  var ctrl =this;

  ctrl.user = UserService.getUser($stateParams.userId).then(handleSuccess,handleError);

  function handleSuccess(data){
    ctrl.user = data.user;
  };

  function handleError(data){
    ctrl.responseMessage = response.statusText +"\r\n";
  };

}