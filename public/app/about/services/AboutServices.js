(function() {
	'use strict';

	angular
	  .module('app.about')
	  .factory('AboutServices', AboutServices);

	AboutServices.$inject = ['$http'];

	function AboutServices($http) {
		//content
		var vm=this;
		console.log(vm)
		return {
			getTechnologies:getTechnologies
		}

		function getTechnologies(){
			//return true;
			console.log("fetch the data")
			return $http.get('app/about/data/technologies.json')
			.then(function(response){
				var data=response.data[0];
			},function(response){
				var data="something went wrong"
			})
		}
	}
})();