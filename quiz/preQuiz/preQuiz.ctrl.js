angular.module('app')
  .controller('PreQuizController', PreQuizController)

function PreQuizController() {
  
  vm = this;
  
  //Checks if emergency button was pressed before, if it was then it redirects to main page:
 
if(CheckService.emergencies>0)
{
$location.path("/");
}


  vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }


}
