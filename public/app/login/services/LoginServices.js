(function() {
	'use strict';

	angular
	  .module('app.login')
	  .factory('LoginFactory', LoginFactory);

	LoginFactory.$inject = ['$http'];

	function LoginFactory($http) {
		//content

		return {
			getAuth:getAuth
		}

		function getAuth(){
			console.log("getAuth")
		}
	}
})();