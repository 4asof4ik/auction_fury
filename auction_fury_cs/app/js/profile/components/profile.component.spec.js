var profilecomponent = require('./profile.component.js'),
  mainModule = require('../../main/main.module.js');
describe('app_profile_component',function(){
  var ctrl;
  beforeEach(angular.mock.module(require('angular-ui-router')));
  beforeEach(angular.mock.module(profilecomponent.name,mainModule.name));

  beforeEach(inject(function($componentController){
    ctrl = $componentController('profile');
  }));

  describe('profile',function(){
    it('hello test',function(){
      expect('hello').toEqual('hello');
    });


  });



});