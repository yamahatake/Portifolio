(function(){

	var app = angular.module("portfolio", []);

	app.controller('ToolsController',function($scope, $http){
		/*$http.get('js/ferramentas.json').then(function(res){
		    $scope.ferramentaitens = res.data;
		});	*/
		$.ajax({
		    url: 'js/ferramentas.json',
		    dataType: 'json',
		    type: 'GET',
		    crossDomain: true
		    success: function(data){
		        $scope.ferramentaitens = res.data;
		    }
		});
	});

	app.controller('WorksController',function($scope, $http){
		/*$http.get('js/trabalhos.json').then(function(res){
		    $scope.trabalhoitens = res.data;
		});	*/
		$.ajax({
		    url: 'js/ferramentas.json',
		    dataType: 'json',
		    type: 'GET',
		    crossDomain: true
		    success: function(data){
		        $scope.ferramentaitens = res.data;
		    }
		});
	});
})();