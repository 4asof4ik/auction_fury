var angular = require('angular'),
    mainModule = require('./main/main.module.js');

require('@angular/router/angular1/angular_1_router');
require('angular-base64-upload/demo/angular-base64-upload.js');
require('angular-validation-match');

angular.module('app',
    [
      mainModule.name,
      require('angular-resource'),
      'naif.base64',
      'validation.match'
    ]).config(function($locationProvider, $httpProvider) {

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthInterceptor');
  })
  .value('$routerRootComponent', 'appMain')
  .run(function($rootScope, $location, Auth, $state) {
     $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

        var isAuthenticationRequired = toState.data
          && toState.data.requiresLogin
          && !Auth.isAuthenticated();

    if(isAuthenticationRequired)
    {
      event.preventDefault();
      $state.go('main.login');
    }
  });
});

