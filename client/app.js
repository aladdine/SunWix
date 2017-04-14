var mainApp = angular.module("mainApp", ["ngRoute"]);

mainApp.config(function($routeProvider){//defining routes
	console.log("yay..");
	$routeProvider.when("/",{
		controller: 'MainController',
		templateUrl: './main.html'
	}).when("/apis",{
		controller: 'MainController',
		templateUrl: './apis.html'
	}).when("/widgets",{
		controller: 'MainController',
		templateUrl: './widgets.html'
	}).when("/datasets",{
		controller: 'MainController',
		templateUrl: './datasets.html'
	}).when("/explore",{
		controller: 'MainController',
		templateUrl: './explore.html'
	}).when("/upload",{
		controller: 'MainController',
		templateUrl: './upload.html'
	})
	.when("/demo",{
		controller: 'MainController',
		templateUrl: './demo.html'
	})
	.otherwise({
		controller: 'MainController',
		templateUrl: './main.html'
	})
});