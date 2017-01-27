var app = angular.module('app',['ngRoute', 'ngResource','angularCSS']);


app.directive('home', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './home/home.partial.html',
    css: {
      href: './home/css/home.css'
      /* Persist: The stylesheet won't be removed even after the directive has been destroyed */
      /*persist: true*/
    }
  }
});