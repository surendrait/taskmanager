(function() {
	'use strict';

	angular
	  .module('app.dashboard')
	  .controller('DashboardController', DashboardController);

	DashboardController.$inject = ['$scope','$route'];

	function DashboardController($scope,$route) {
		//content
		var vm=this;
		vm.welcome="Welcome To Dashboard"

		//TODO
		vm.refresh=function(){
			console.log($route);
			console.log($route.current)
			console.log($route.routes)
			$route.reload();
		}
	}
})();