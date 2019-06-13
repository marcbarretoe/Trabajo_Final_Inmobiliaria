var app = angular.module('inmobiliariaApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    $scope.menuArriba="app/menu/menu.html";
    $scope.mapa="app/mapa/mapa.html";
    $scope.setActive = function(Opcion){
  	    $scope.mInicio = "";
	    $scope.mMapa = "";
	    $scope[Opcion] = "active";
    }
}]);