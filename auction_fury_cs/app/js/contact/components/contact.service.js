var angular = require('angular');
'use strict';

module.exports = angular
  .module('app.contact.service', [])
  .factory('GoogleMaps', GoogleMaps);

function GoogleMaps() {
  return {
    location: function() {
      var myLatLng = {lat:49.832876, lng: 23.997328};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng
      });
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Auction Fury'
      });
    }
  }
}
