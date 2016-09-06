module.exports = angular
  .module('app.project.component', [])
  .component('project', {
    templateUrl: 'app/js/about/project/components/project.template.html',
    controller: ProjectController
  });

  function ProjectController() {
      var ctrl = this;
  };

