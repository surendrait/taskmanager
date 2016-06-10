(function() {
	'use strict';

	angular
	  .module('blog')
	  .run(RunConfiguration);

	RunConfiguration.$inject = ['$rootScope','$log'];

	function RunConfiguration($rootScope,$log) {
		//content
		$rootScope.$on('$routeChangeSuccess',function(event,current,previous){
			$log.info("Successfuly change route ")
			$log.debug(event)
			$log.debug(current)
			$log.debug(previous)
		})
	}
})();