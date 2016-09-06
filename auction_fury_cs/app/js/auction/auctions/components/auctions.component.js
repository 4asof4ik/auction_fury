var angular = require('angular');

module.exports = angular
.module('app.auctions.component',[])
.component('auctions',{
  binding: {
    settings: '<'
  },
  templateUrl:'app/js/auction/auctions/components/auctions.template.html',
  controller:AuctionsController,
});

AuctionsController.$inject =['auctionsResource','Auth','AuctionConstants'];
function AuctionsController(auctionsResource, Auth, AuctionConstants){
  var ctrl = this;
  this.auctions = [];
  this.totalAuctions = AuctionConstants.TOTAL_AUCTION;
  this.auctionsPerPage = AuctionConstants.AUCTION_PER_PAGE;
  getResultsPage(AuctionConstants.CURRENT_PAGE);
  this.currentp = AuctionConstants.CURRENT_PAGE;
  this.pageChanged = function(currentp) {
    getResultsPage(currentp);
  };

  function getResultsPage(currentp) {
    auctionsResource.get({currentp: currentp}).$promise.then(success, error);
    function success(data){
      ctrl.auctions = data.auctions;
      ctrl.totalAuctions = data.count;
      ctrl.pagination = data.currentp;
    };
    function error(responce) {
     ctrl.responseMessage = responce.status;
   };
 };
 ctrl.isAuthenticated = isAuth;
  var isAuth = false;

  function isAuth() {
    if(!isAuth===Auth.isAuthenticated()) {
      return true
    }
  }
};
