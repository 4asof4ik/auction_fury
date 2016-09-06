'use strict';
module.exports = angular
.module('app.auctions.route',[])
.config(function($stateProvider){
  $stateProvider.state({
    name: 'auctions',
    url: '/auctions',
    template:'<auctions></auctions>'
  });
});
