module.exports = angular
  .module('app.home.component', [])
  .component('home', {
    templateUrl: '/app/js/home/components/home.template.html',
    controller: HomeController,
    transclude: true
  });

function HomeController(){
  var ctrl =this;
}

