var auctionFormComponent  = require('./components/auctionform.component.js'),
  auctionFormRoute = require('./auctionform.route'),
  auctionFormResources = require('../../common/auctions.services.js');

module.exports = angular.module("app.auctionform", [
  auctionFormComponent.name,
  auctionFormRoute.name,
  auctionFormResources.name
]);

