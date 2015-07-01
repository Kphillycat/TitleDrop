angular.module('TitleDrop').controller('listController', listController);

listController.$inject = ['grabMoviesService'];

function listController(grabMoviesService){
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
}