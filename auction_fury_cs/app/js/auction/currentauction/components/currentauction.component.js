var angular = require('angular');

module.exports = angular
.module('app.currentauction.component',[])
.component('currentauction',{
  binding: {
    settings: '<'
  },
  templateUrl:'app/js/auction/currentauction/components/currentauction.template.html',
  controller:CurrentAuctionController,
});

CurrentAuctionController.$inject =['auctionsResource', '$stateParams'];
function CurrentAuctionController(auctionsResource, $stateParams){
  var ctrl = this;
  ctrl.auction = auctionsResource.get({id:$stateParams.currentauctionID}).$promise.then(success, error);
    function success(data){
      ctrl.auction = data.auction;
    };
    function error(responce) {
     ctrl.responseMessage = responce.status;
   };
};
