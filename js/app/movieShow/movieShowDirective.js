angular.module('TitleDrop').directive('movieCard', movieCardDirective);

function movieCardDirective(){
  return {
    restrict: 'E',
    template: "<div class='title'>{{movie.title}}</div><div class='time'>{{movie.time}}</div>",
    controller: 'listController',
    controllerAs: 'list'
  }
}
