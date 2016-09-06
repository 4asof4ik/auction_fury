var angular = require('angular');
'use strict';
module.exports = angular
    .module('app.login.component.login', [])
    .component('login', {
      templateUrl: '/app/js/login/components/login.template.html',
      controller: LoginController
    });

LoginController.$inject = ['$state', 'Auth', 'messages'];
function LoginController($state, Auth, messages) {
  var ctrl = this;
  ctrl.failMessage = messages.NO_AUTH;
  ctrl.failResponse = false;
  ctrl.login = login;

  function login(user){
    ctrl.errors = {};
    Auth.login(user)
      .success(function(result){
        $state.go('profile');
      })
      .error(function(response) {
        ctrl.failResponse = true;
    })
  };
}

