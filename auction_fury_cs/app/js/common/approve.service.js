var angular = require('angular');

var userResource  = require('./user.services.js');

module.exports = angular
  .module("approve.service", [userResource.name])
  .factory("ApproveService",ApproveService);

ApproveService.$inject = ['userResource'];
function ApproveService(userResource) {
  ctrl = this;
  var user = {
  setData : setData,
  getData : getData,
  approveUser : approveUser
  };
  return user;

  function setData(data) {
    ctrl.user = data.user;
  };

  function getData() {
    return ctrl.user;
  };

  function approveUser(id, user, approve) {
    return userResource.update({id: id}, user, approve).$promise
    .then(function(response){
      return response;
    });
  };
};
