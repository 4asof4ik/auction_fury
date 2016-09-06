var loginComponent = require('./login.component.js');

// // describe('Login Controller', function() {
// //   var ctrl;
// //   beforeEach(angular.mock.module(require('angular-ui-router')));
// //   beforeEach(angular.mock.module(loginComponent.name);
// //   beforeEach(inject(function($componentController) {
// //     ctrl = $componentController('login');
// //   }));

// //   describe('login', function() {
// //     it('test test', function() {
// //       expect('hello').toEqual('hello');
// //     });
// //   });
// // });

// // describe('Controller: LoginController', function() {
// //   var $state, Auth, messages, failMessage, failResponse, login;

// //   beforeEach(angular.mock.module(require('angular-ui-router')));
// //   beforeEach(angular.mock.module('app.login'));

// //   beforeEach(inject(function($rootScope, $controller) {
// //     // Test date
// //       scope = $rootScope.$new();
// //       ctrl = $componentController('login' , {$scope: scope});
// //   }));

// //   it("should define login function", function () {
// //         expect('d').toEqual('d');
// //     });
// // });
// describe('controllers', function() {

//   describe('login ', function(){
//     var scope, ctrl;

//     beforeEach(angular.mock.module(require('angular-ui-router')));
//     beforeEach(angular.mock.module('app.login'));
//     beforeEach(angular.mock.module('app.login.service'));

//     beforeEach(inject(function($componentController) {
//       scope = {};
//       ctrl = $componentController('login', {$scope:scope});
//     }));

//     it('should create "phones" model with 3 phones', function() {
//       expect('f').toEqual('f');
//     });
//   });
// });


describe('Component: login', function() {
  beforeEach(angular.mock.module(require('angular-ui-router')));
  beforeEach(angular.mock.module(loginComponent.name));

  var scope;
  var element;
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<login></login>');
    element = $compile(element)(scope);
  }));

   it('ss', function() {

   });

   // var controller;
   // beforeEach(function() {
   //   controller = element.controller('login');
   // });

   // it('ccc', function() {

   // });

   // var controller;
   // beforeEach(inject(function($componentController, Auth) {
   //   ctrl = $componentController('login', {

   //    $scope:scope});
   // }));

   // it('df', function() {
   //   expect(ctrl.login).toBeDefined();
   // });
});
