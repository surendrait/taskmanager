(function() {
	'use strict';

	angular
	  .module('app.admin')
	  .controller('AdminController', AdminController);

	AdminController.$inject = ['$scope'];

	function AdminController($scope) {
		//content
		var vm=this;
		vm.name="ADMIN";
		vm.title="TASKS PENDING"
	}
})();