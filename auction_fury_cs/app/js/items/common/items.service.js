var angular = require('angular');

var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.items.service", [
        coreServices.name,
        require('angular-resource')])
    .factory("itemsResource",itemsResource);

    itemsResource.$inject = ['$resource','appSettings'];

function itemsResource($resource,appSettings){
        return $resource(appSettings.SERVER_PATH + "items.json",null);
    }
