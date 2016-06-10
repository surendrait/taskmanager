(function() {
	'use strict';

	angular
	  .module('app.login')
	  .controller('LoginController', LoginController);

	LoginController.$inject = ['LoginFactory'];

	function LoginController(LoginFactory) {
		//content
		//console.log(LoginFactory)
		var vm=this;
		vm.title="Please sign in"
		vm.user="User Name";
		vm.password="Password"
		vm.getAuth=function(user){
			//console.log("getAuth" +user)
			if(user==="user"){
				console.log("valide user")
			}else{
				console.log("not valide user")
			}
		}
	}
})();