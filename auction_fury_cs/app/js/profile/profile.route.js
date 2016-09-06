'use strict';
module.exports = angular
  .module('app.profile.route',[])
  .config(function($stateProvider) {
    $stateProvider.state({
        name: 'profile',
            url: '/profile',
            template:'<profile></profile>',
            data : {requiresLogin : true }
    });
});