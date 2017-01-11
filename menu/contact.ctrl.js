angular.module('app')
  .controller('ContactController', ContactController)
  
  ContactController.$inject = ['$scope', 'CheckService', '$location'];

function ContactController($scope, CheckService, $location) {
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:

if(CheckService.emergencies>0)
{
$location.path("/");
}
  
}
