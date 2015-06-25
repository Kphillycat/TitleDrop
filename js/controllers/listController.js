angular.module('WhenTheySayItApp', ['firebase'])
	.controller('listController', function($firebaseArray){
		var vm = this;
		var ref = new Firebase('https://vivid-torch-9530.firebaseio.com');
		// vm.movies = [{"title": "oneTest", "time" : "onemin"}, {"title": "twoTest", "time" : "twomin"}];
		  // create a synchronized array
		vm.movies = $firebaseArray(ref);
		  // add new items to the array
		  // the message is automatically added to our Firebase database!
		// $scope.addMessage = function() {
		// $scope.messages.$add({
		//   text: $scope.newMessageText
		// });
	});