'use strict';
module.exports = angular
.module('app.user.route',[])
.config(function($stateProvider){
  $stateProvider.state({
    name:'users',
    url: '/users/:userId',
    template: '<user-detail></user-detail>'
  });
});