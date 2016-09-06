var currentAuctionComponent  = require('./components/currentauction.component.js'),
  currentAuctionRoute = require('./currentauction.route'),
  currentAuctionResources = require('../../common/auctions.services.js');

module.exports = angular.module("app.currentauction", [
  currentAuctionComponent.name,
  currentAuctionRoute.name,
  currentAuctionResources.name
]);

