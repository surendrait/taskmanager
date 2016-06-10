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
		.when('/user', {
			templateUrl: 'app/templates/main.html',
			controller: 'MainController',
			controllerAs:'vm'
		})
		.when('/login', {
			templateUrl: 'app/login/templates/login.html',
			controller: 'LoginController',
			controllerAs:'vm'
		})
		.when('/admin', {
			templateUrl: 'app/admin/templates/admin.html',
			controller: 'AdminController',
			controllerAs:'vm'
		})
		.when('/dashboard', {
			templateUrl: 'app/dashboard/templates/dashboard.html',
			controller: 'DashboardController',
			controllerAs:'vm'
		})
		.otherwise({ redirectTo: '/dashboard' })
	}
})();