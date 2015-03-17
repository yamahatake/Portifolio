(function(){

	var app = angular.module("portfolio", []);


	app.controller('ferramentaslistagem',function($scope, $http){
		$http.get('script/ferramentas.json')
       .then(function(res){
          $scope.ferramentas = res.data;                
        });
	});
})();