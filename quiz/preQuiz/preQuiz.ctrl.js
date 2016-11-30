angular.module('app')
  .controller('PreQuizController', PreQuizController)

function PreQuizController() {
  
  vm = this;

  vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }


}