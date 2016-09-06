module.exports = angular
  .module( 'app.register.component', [ 'ngMessages', 'ngMaterial' ])
  .component( 'register', {
    templateUrl: '/app/js/register/components/register.template.html',
    controller: RegisterController,
    transclude: true
  });

RegisterController.$inject =[ 'RegisterService', '$state', '$mdDialog', '$mdMedia', 'appSettings', 'server_statuses','$translate' ];
function RegisterController( RegisterService, $state, $mdDialog, $mdMedia, appSettings, server_statuses, $translate){
  'use strict';
  var ctrl = this;
  ctrl.$onInit = function() {
    ctrl.emailRegEx=appSettings.EMAIL_REGEX;
  };
  ctrl.register = register;
  ctrl.accept_policy = accept_policy;
  function accept_policy( user ){
    ctrl.user = user;
    $mdDialog.show(
      $mdDialog.confirm()
               .clickOutsideToClose( true )
               .title( 'Privacy Policy' )
               .textContent( 'There are many different ways you can use our services – to search for and share information, to communicate with other people or to create new content. When you share information with us, for example by creating an account, we can make those services even better – to show you more relevant search results and ads, to help you connect with people or to make sharing with others quicker and easier. As you use our services, we want you to be clear how we’re using information and the ways in which you can protect your privacy. Our Privacy Policy explains: What information we collect and why we collect it. How we use that information. The choices we offer, including how to access and update information.' )
               .ok( 'I accept' )
               .cancel( 'I don\'t accept' )
    ).then(
      function( response ){
        register()
      },
      function( reject ){
        ctrl.errors = { policy_rejected: true }
      }
    );
  }

  function register(){
    RegisterService.Register( ctrl.user ).then(
      function( response ){
        $state.go( 'registred' );
      },
      function( reject ){
        if ( reject.status === server_statuses.NO_CONNECTION ) {
          ctrl.errors = { no_connection: true };
        } else if ( reject.status === server_statuses.UNPROCESSABLE_ENTITY ) {
          ctrl.errors = { taken_email: ctrl.user.email };
        }
      }
    );
  }
}

