angular.module('TitleDrop')
	.controller('listController', ['grabMoviesService', function(grabMoviesService){
		var vm = this;
		// create movie array from service
		grabMoviesService.success(function(data){
			vm.movies = data;
		}).
		error(function(data, status, headers, config){
			console.log('ERROR: ' + data);
		});
		// add movie time to database
		// vm.addMovie = function(movie, time) {
		// };
	}]);