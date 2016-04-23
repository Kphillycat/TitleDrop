angular.module('TitleDrop').controller('listController', listController);

listController.$inject = ['$firebaseArray', 'FIREBASE_URL'];

function listController($firebaseArray, FIREBASE_URL){
	var vm = this;

	var ref = new Firebase(FIREBASE_URL);
	// download the data into a local object
	var syncObject = $firebaseArray(ref);

	// synchronize the object with a three-way data binding
  // syncObject.$bindTo($scope, "data");

	vm.movies = $firebaseArray(ref);

	// the movie is automatically added to our Firebase database!
	vm.addMovie = function() {
		if(vm.movieTitle && vm.movieTime) {
				vm.movies.$add({
					title: vm.movieTitle,
					time: vm.movieTime
			});
			vm.movieTitle = '';
			vm.movieTime = '';
		} else {
			console.log('Can\'t add blank values');
		}

	};

}
