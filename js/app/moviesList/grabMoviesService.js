angular.module('TitleDrop')
	.service('grabMoviesService', function(FIREBASE_URL, $firebaseArray) {
    var ref = new Firebase(FIREBASE_URL);
		
    return $firebaseArray(ref);
	});