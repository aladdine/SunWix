var mainApp = angular.module("mainApp");

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

mainApp.controller("MainController",["$scope",function($scope){

	
}]);