(function() {
	'use strict';

	angular
	  .module('app.about')
	  .controller('AboutController', AboutController);

	AboutController.$inject = ['$scope','AboutServices'];

	function AboutController($scope,AboutServices) {
		//content
		var about=this;
		about.info="testing controller as "
		$scope.title="Technologies stack"
		$scope.list= AboutServices.getTechnologies;
	}
})();