var angular = require('angular');
'use strict';

module.exports = angular
  .module('app.login.service', [])
  .factory('Auth', Auth);


Auth.$inject = ['$http', '$window', 'appSettings'];
function Auth($http, $window, appSettings) {
  return {
    login: function(user) {
      var login = $http.post( appSettings.SERVER_PATH + 'auth_user.json', user);
      login.success(function(result) {
        if(user.rememberMe){
          $window.localStorage.setItem('auth_token', JSON.stringify(result));
        } else {
          $window.sessionStorage.setItem('auth_token', JSON.stringify(result));
        }
      });
      return login;
    },
    loginAfterConfirmation: function(auth_token){
      $window.sessionStorage.setItem('auth_token', JSON.stringify(auth_token));
    },
    logout: function() {
      $window.localStorage.removeItem('auth_token') ||
      $window.sessionStorage.removeItem('auth_token');
    },
    isAuthenticated: function() {
      var authorize = false;
      var token = $window.localStorage.getItem('auth_token') ||
                  $window.sessionStorage.getItem('auth_token');
      if (token !== null) {
        return authorize =true;
      }
    },
    getCurrentUserId: function(){
      var token = $window.localStorage.getItem('auth_token') || $window.sessionStorage.getItem('auth_token');
      var getToken = token.split('.');
      var userInfo = JSON.parse(atob(getToken[1]));
      return userInfo.user_id;
    }
  };
}
