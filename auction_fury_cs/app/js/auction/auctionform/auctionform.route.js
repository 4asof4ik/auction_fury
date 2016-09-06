'use strict';
module.exports = angular
.module('app.auctionform.route',[])
.config(function($stateProvider){
  $stateProvider.state({
    name: 'auctionform',
    url: '/auctionform',
    template:'<auctionform></auctionform>'
  });
});
