(function(){

	var app = angular.module("store", []);

	app.controller('StoreController',function($scope, $http){
		//cart.init('products');
		$http.get('js/ferramentas.json').then(function(res){
		    $scope.products = res.data;                
		});	 
	});
})();