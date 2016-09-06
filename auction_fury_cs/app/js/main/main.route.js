'use strict';
module.exports = angular
  .module('app.main.route', ['pascalprecht.translate','ngCookies'])
  .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    $translateProvider.preferredLanguage('en')

  .useStaticFilesLoader({
    prefix: 'app/i18n/',
    suffix: '.json'
  })
  .fallbackLanguage('en')
  .useCookieStorage();

  $stateProvider.state({
    name: 'main',
    url: '/',
    template: '<app-main></app-main>'
    });
});
