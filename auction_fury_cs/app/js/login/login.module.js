var angular = require('angular'),
    loginRoute = require('./login.route.js'),
    loginComponent = require('./components/login.component.js'),
    loginInterceptor = require('./components/login.interceptor.js'),
    loginService = require('../common/login.service.js');

module.exports = angular.module("app.login",[
  loginRoute.name,
  loginComponent.name,
  loginService.name,
  loginInterceptor.name
]);
