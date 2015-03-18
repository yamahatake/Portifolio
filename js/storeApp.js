(function(){

	var app = angular.module("portfolio", []);

	app.controller('ToolsController',function($scope, $http){
		$http.get('js/ferramentas.json').then(function(res){
		    $scope.products = res.data;                
		});	 
	});
})();