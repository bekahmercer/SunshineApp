angular.module('app')
  .controller('MenuController', MenuController)
  
  MenuController.$inject = ['$scope', 'CheckService', '$location']

  
function MenuController($scope, CheckService, $location) {
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:

if(CheckService.emergencies>0)
{
$location.path("/");
}
  
}
