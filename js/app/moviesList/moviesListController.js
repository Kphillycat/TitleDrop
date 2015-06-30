angular.module('TitleDrop')
	.controller('listController', ['grabMoviesService', function(grabMoviesService){
		var vm = this;
		// create movie array from service
		vm.movies = grabMoviesService;
		// add movie time to database
		// vm.addMovie = function(movie, time) {
		// };
	}]);