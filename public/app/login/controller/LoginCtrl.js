(function() {
	'use strict';

	angular
	  .module('login.app')
	  .controller('LoginController', LoginController);

	LoginController.$inject = ['$log'];

	function LoginController($log) {
		//content
		var vm=this;
		vm.title="Login page"
	}
})();