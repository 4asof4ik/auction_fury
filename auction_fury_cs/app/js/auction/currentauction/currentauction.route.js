'use strict';
module.exports = angular
.module('app.currentauction.route',[])
.config(function($stateProvider){
  $stateProvider.state({
    name: 'currentauction',
    url: '/auctions/:currentauctionID',
    template:'<currentauction></currentauction>'
  });
});
