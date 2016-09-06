var angular = require('angular');

module.exports = angular
  .module("constant.service", [])
  .constant("AuctionConstants",{'TOTAL_AUCTION':'0', 'AUCTION_PER_PAGE':'10', 'CURRENT_PAGE':'1' } );

