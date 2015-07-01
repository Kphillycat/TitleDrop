angular.module('TitleDrop').factory('grabMoviesService', grabMoviesService);

grabMoviesService.$inject = ['$http', '$firebaseArray', 'FIREBASE_URL'];

function grabMoviesService($http, $firebaseArray, FIREBASE_URL) {
    // var ref = new Firebase(FIREBASE_URL);
	// Commented out due to firewall issues
	// data = $firebaseArray(ref);
	return $http.get('http://localhost:3000/movies');
}