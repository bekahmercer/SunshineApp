angular.module('app')
.controller('FinalSummaryController', FinalSummaryController)

FinalSummaryController.$inject = ['$scope', 'CheckService']

function FinalSummaryController($scope, CheckService) {

vm = this;
//Checks if emergency button was pressed before, if it was then it redirects to main page:
 
if(CheckService.emergencies>0)
{
$location.path("/");
}


CheckService.total = (CheckService.qs1summary + CheckService.qs2summary + CheckService.qs3summary);
vm.total = CheckService.total;
  
}
