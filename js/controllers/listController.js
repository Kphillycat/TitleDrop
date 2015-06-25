angular.module('WhenTheySayItApp', ['FIREBASE_REF'])
	.controller('listController', function(){
		var vm = this;
		var ref = new Firebase(FIREBASE_REF);
		vm.movies = [{"title": "oneTest", "time" : "onemin"}, {"title": "twoTest", "time" : "twomin"}];
		  // create a synchronized array
		// vm.movies = $firebaseArray(ref);
		  // add new items to the array
		  // the message is automatically added to our Firebase database!
		// $scope.addMessage = function() {
		// $scope.messages.$add({
		//   text: $scope.newMessageText
		// });
	});