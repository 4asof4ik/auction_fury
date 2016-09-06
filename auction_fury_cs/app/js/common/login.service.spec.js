var loginService = require('./login.service.js'),
     userService = require('./user.services.js');
describe('Login service: ', function() {
  var service;

  beforeEach(angular.mock.module(loginService.name, userService.name));

  beforeEach(inject(function(Auth) {
    service = Auth;
  }));

  it('should be defined', function() {
    expect(service).toBeDefined();
  });

  it('Login method should be defined', function() {
    expect(service.login).toBeDefined();
  });

  it('Logout method should be defined', function() {
    expect(service.logout).toBeDefined();
  });

  it('Authenticated method should be defined', function() {
    expect(service.isAuthenticated).toBeDefined();
  });
});
