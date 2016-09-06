var auctionsComponent  = require('./components/auctions.component.js'),
  auctionsResources = require('../../common/auctions.services.js'),
  auctionConstant = require('./services/constant.service.js'),
  auctionsRoute = require('./auctions.route');

module.exports = angular.module("app.auctions", [
  auctionsComponent.name,
  auctionsRoute.name,
  auctionsResources.name,
  auctionConstant.name
]);

