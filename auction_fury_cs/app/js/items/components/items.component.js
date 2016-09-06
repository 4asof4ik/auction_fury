var angular = require('angular');
'use strict';

module.exports = angular
.module('app.profile.component', [ 'ngMessages',
                                 'ngMaterial',
                                 'naif.base64'])
.component('items',{
    templateUrl:'app/js/items/components/items.template.html',
    controller:ItemsController,
});

ItemsController.$inject =['itemsResource', '$mdDialog', '$mdMedia'];
function ItemsController(itemsResource, $mdDialog, $mdMedia){
    var  ctrl = this;

    itemsResource.get( function(data){
        ctrl.items = data.items;
        ctrl.colection = data.items;
        debugger;
    })

    ctrl.showCurrent = showCurrent;
    function showCurrent(item){
        $mdDialog.show({
            controller: DialogControllerCurrent,
            templateUrl: 'app/js/items/components/currentItem.template.html',
            locals: {
                item: item
            },
            parent: angular.element(document.body),
            clickOutsideToClose:true
        })
        ;
    }

    ctrl.newItem = new itemsResource();
    ctrl.showNew = showNew;
    function showNew(newItem){
        $mdDialog.show({
            controller: DialogControllerNew,
            templateUrl: 'app/js/items/components/сreateItem.template.html',
            locals: {
                newItem: newItem
            },
            parent: angular.element(document.body),
            clickOutsideToClose:true
        })
        ;
    }

    function DialogControllerNew($scope, $mdDialog, newItem)
    {
        $scope.newItem = newItem;
        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.saveChanges = function () {
        ctrl.newItem.$save( function() {
                $scope.cancel()
        }, function() {
                $scope.cancel()
        });
    }
    }

    function DialogControllerCurrent($scope, $mdDialog, item) {
        $scope.item = item;
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }


}

