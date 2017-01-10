angular.module('app')
    .controller('TwoTwoController', TwoTwoController) 

TwoTwoController.$inject = ['$scope', 'CheckService'];

function TwoTwoController ($scope, CheckService) {
    vm = this;
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:
 
if(CheckService.emergencies>0)
{
$location.path("/");
}


vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }

vm.cbs2q21 = CheckService.cbs2q21; 
vm.cbs2q22 = CheckService.cbs2q22;
vm.cbs2q23 = CheckService.cbs2q23;
vm.cbs2q24 = CheckService.cbs2q24;
vm.cbs2q25 = CheckService.cbs2q25;    

vm.currentPage = CheckService.qs2p2; 
vm.total = CheckService.total; 

$scope.cbChange = function(val, selectedCb) { 

switch(selectedCb)
{
case 'cbs2q21':

CheckService.cbs2q21 = val;

break;

case 'cbs2q22':

CheckService.cbs2q22 = val;

break;

case 'cbs2q23':

CheckService.cbs2q23 = val;

break;
        
case 'cbs2q24':

CheckService.cbs2q24 = val;

break;
        
case 'cbs2q25':

CheckService.cbs2q25 = val;

break;
}

CheckService.qs2p2+= val; 
vm.currentPage = CheckService.qs2p2; 
   
}
}
