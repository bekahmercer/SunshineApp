angular.module('app')
  .controller('FaqController', FaqController)
  
  FaqController.$inject = ['$scope', 'CheckService', '$location'];

function FaqController($scope, CheckService, $location) {
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:

if(CheckService.emergencies>0)
{
$location.path("/");
}
  
}
