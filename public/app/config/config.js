(function() {
	'use strict';

	angular
	  .module('blog')
	  .config(BlogConfiguration);

	BlogConfiguration.$inject = ['$routeProvider','$logProvider'];

	function BlogConfiguration($routeProvider,$logProvider) {
		//content
		//console.log($logProvider)
		$logProvider.debugEnabled(true);

		$routeProvider
		.when('/', {
			templateUrl: 'app/templates/main.html',
			controller: 'MainController',
			controllerAs:'vm'
		})
		.when('/about', {
			templateUrl: 'app/about/templates/about.html',
			controller: 'AboutController',
			controllerAs:'about'
		})
		.when('/login', {
			templateUrl: 'app/login/templates/login.html',
			controller: 'LoginController',
			controllerAs:'vm'
		})
		.otherwise({ redirectTo: '/login' })
	}
})();