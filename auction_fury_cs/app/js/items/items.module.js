var angular = require('angular')
    itemsComponent  = require('./components/items.component.js'),
    itemsRoute = require('./items.route'),
    itemsResource = require('./common/items.service.js');

module.exports = angular.module("app.items", [
    itemsComponent.name,
    itemsRoute.name,
    itemsResource.name

]);
