var mainApp = angular.module("mainApp", ["ngRoute"]);

mainApp.config(function($routeProvider){//defining routes
	console.log("yay..");
	$routeProvider.when("/",{
		controller: 'MainController',
		templateUrl: './views/main.html'
	}).when("/apis",{
		controller: 'MainController',
		templateUrl: './views/apis.html'
	}).when("/widgets",{
		controller: 'MainController',
		templateUrl: './views/widgets.html'
	}).when("/datasets",{
		controller: 'MainController',
		templateUrl: './views/datasets.html'
	}).when("/libraries",{
		controller: 'MainController',
		templateUrl: './views/libraries.html'
	}).when("/explore",{
		controller: 'MainController',
		templateUrl: './views/explore.html'
	}).when("/upload",{
		controller: 'MainController',
		templateUrl: './views/upload.html'
	})
	.when("/demo",{
		controller: 'MainController',
		templateUrl: './views/demo.html'
	})
	.otherwise({
		controller: 'MainController',
		templateUrl: './views/main.html'
	})
});