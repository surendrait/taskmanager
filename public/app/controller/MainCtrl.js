(function() {
	'use strict';

	angular
	  .module('blog')
	  .controller('MainController', MainController);

	MainController.$inject = ['$scope','blogconstant'];

	function MainController($scope,blogconstant) {
		//controller As
		var vm =this;
		vm.title="welcome to  User"
		vm.version=angular.version.full;
		vm.taskname=blogconstant.add;
		vm.id=blogconstant.id;
		vm.owener=blogconstant.owener;
		vm.description=blogconstant.description;
		vm.dependancy=blogconstant.dependancy;
		vm.due=blogconstant.due;

		vm.addTask=function(){
			var listTask=[];
			console.log("push to task");
		}

		// logout code

		vm.logout=function(){
			console.log("clear the logout")
		}

	}
})();