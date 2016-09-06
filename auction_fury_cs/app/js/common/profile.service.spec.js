var profileService = require('./profile.service.js'),
  userService = require('./user.services.js');

describe('User service: ',function(){
  var UserService;

  beforeEach(angular.mock.module( profileService.name, userService.name));

  beforeEach(inject(function(_UserService_){
    UserService = _UserService_;
  }));

  it( 'should be defined', function(){
    expect( UserService ).toBeDefined();
  } );

  it('Get user method should be defined',function(){
    expect(UserService.getUser ).toBeDefined();
  });

  it('Get user method should be defined',function(){
    expect(UserService.updateUser ).toBeDefined();
  });

  it('hello test',function(){
    expect('hello').toEqual('hello');
  });

});