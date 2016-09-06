var angular = require('angular');
'use strict';

module.exports = angular
    .module('app.navigation.component', ['pascalprecht.translate'])
    .component('navigation', {
      templateUrl: './app/js/navigation/components/navigation.template.html',
      controller: NavController
    });

NavController.$inject = ['$window', 'Auth','$translate'];
function NavController($window, Auth, $translate) {
  var ctrl = this;
  ctrl.logout = logout;
  ctrl.isAuthenticated = isAuth;
  var isAuth = false;
  
  this.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

  function isAuth() {
    if(!isAuth===Auth.isAuthenticated()) {
      return true
    }
  }
  function logout() {
    Auth.logout();
  }
}
