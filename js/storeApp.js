(function(){

	var app = angular.module("portfolio", []);

	app.controller('StoreController',function($scope, $http){
		//cart.init('products');
		$http.get('js/products.json').then(function(res){
		    $scope.products = res.data;                
		});	 
	});
})();