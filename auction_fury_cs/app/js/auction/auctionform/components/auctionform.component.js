var angular = require('angular');

module.exports = angular
.module('app.auctionform.component',[])
.component('auctionform',{
  binding: {
    settings: '<'
  },
  templateUrl:'app/js/auction/auctionform/components/auctionform.template.html',
  controller:AuctionFormController,
});

AuctionFormController.$inject =['auctionsResource', '$state'];
function AuctionFormController(auctionsResource, $state){
  var ctrl = this;
  ctrl.getDatetime = new Date();
  ctrl.auction = new auctionsResource();
  ctrl.submit = function() {
    console.log('Saving New User', ctrl.auction);
    ctrl.auction.$save();
    $state.go( 'auctions' )
  };
};
