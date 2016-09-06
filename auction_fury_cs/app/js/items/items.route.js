module.exports = angular
.module('app.items.route',[])
.config(function($stateProvider){
    $stateProvider.state({
        name: 'items',
            url: '/items',
            template:'<items></items>'
    });
});
