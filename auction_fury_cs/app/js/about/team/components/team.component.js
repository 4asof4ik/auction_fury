module.exports = angular
  .module('app.about.team.component', [])
  .component('team', {
    templateUrl: 'app/js/about/team/components/team.template.html',
    controller: TeamController
  });

  function TeamController() {
      var ctrl = this;
  };

