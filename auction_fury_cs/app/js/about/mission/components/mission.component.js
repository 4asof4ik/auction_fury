module.exports = angular
  .module('app.mission.component', [])
  .component('mission', {
    templateUrl: 'app/js/about/mission/components/mission.template.html',
    controller: MissionController
  });

  function MissionController() {
      var ctrl = this;
  };

