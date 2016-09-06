var registerService = require('./register.services.js'),
    userService = require('../../common/user.services.js');

describe('Register service: ', function(){
  var service;

  beforeEach( angular.mock.module( registerService.name, userService.name ) );

  beforeEach( inject( function( _RegisterService_ ){
    service = _RegisterService_;
  } ) );

  it( 'should be defined', function(){
    expect( service ).toBeDefined();
  } );

  it( 'Register method should be defined', function(){
    expect( service.Register ).toBeDefined();
  } );
});
