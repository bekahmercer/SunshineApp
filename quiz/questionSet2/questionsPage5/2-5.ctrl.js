angular.module('app')
    .controller('TwoFiveController', TwoFiveController) 

TwoFiveController.$inject = ['$scope', 'CheckService'];

function TwoFiveController ($scope, CheckService) {
    vm = this;
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:
 
if(CheckService.emergencies>0)
{
$location.path("/");
}


    vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }

vm.cbs2q51 = CheckService.cbs2q51; 
vm.cbs2q52 = CheckService.cbs2q52;
vm.cbs2q53 = CheckService.cbs2q53;
vm.cbs2q54 = CheckService.cbs2q54;
vm.cbs2q55 = CheckService.cbs2q55;    

vm.currentPage = CheckService.qs2p5; 
vm.total = CheckService.total; 

$scope.cbChange = function(val, selectedCb) { 

switch(selectedCb)
{
case 'cbs2q51':

CheckService.cbs2q51 = val;

break;

case 'cbs2q52':

CheckService.cbs2q52 = val;

break;

case 'cbs2q53':

CheckService.cbs2q53 = val;

break;
        
case 'cbs2q54':

CheckService.cbs2q54 = val;

break;
        
case 'cbs2q55':

CheckService.cbs2q55 = val;

break;
}

CheckService.qs2p5+= val; 
vm.currentPage = CheckService.qs2p5; 
   
}

}
