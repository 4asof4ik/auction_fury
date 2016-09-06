var angular = require('angular'); 

module.exports = angular
	.module('app.news.component', [])
	.component('news', {
		templateUrl: '/app/js/news/components/news.template.html',
		controller: NewsController,
	});

function NewsController() {
	var ctrl = this;
}