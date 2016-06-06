(function() {
	'use strict';

	angular
	  .module('blog')
	  .controller('MainController', MainController);

	MainController.$inject = ['$scope'];

	function MainController($scope) {
		//controller As
		var vm =this;
		vm.title="Blog App"
		vm.version=angular.version.full;
	}
})();