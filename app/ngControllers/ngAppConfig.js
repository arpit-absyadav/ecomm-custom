	// create the module and name it ecomm
	var ecomm = angular.module('ecomm', ['ngRoute']);

	// configure our routes
	ecomm.config(function($routeProvider) {
	    $routeProvider

	    // route for the home page
	        .when('/', {
	            templateUrl: 'views/home.html',
	            controller: 'mainController'
	        })
	        
	});

	// create the controller and inject Angular's $scope
	ecomm.controller('mainController', function($rootScope, $scope, $http, $location) {
	  console.log('from mainController');

	});


