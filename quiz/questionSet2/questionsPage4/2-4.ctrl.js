angular.module('app')
    .controller('TwoFourController', TwoFourController) 

TwoFourController.$inject = ['$scope', 'CheckService'];

function TwoFourController ($scope, CheckService) {
    vm = this;
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:
 
if(CheckService.emergencies>0)
{
$location.path("/");
}


    vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }

vm.cbs2q41 = CheckService.cbs2q41; 
vm.cbs2q42 = CheckService.cbs2q42;
vm.cbs2q43 = CheckService.cbs2q43;
vm.cbs2q44 = CheckService.cbs2q44;
vm.cbs2q45 = CheckService.cbs2q45;    

vm.currentPage = CheckService.qs2p4; 
vm.total = CheckService.total; 

$scope.cbChange = function(val, selectedCb) { 

switch(selectedCb)
{
case 'cbs2q41':

CheckService.cbs2q41 = val;

break;

case 'cbs2q42':

CheckService.cbs2q42 = val;

break;

case 'cbs2q43':

CheckService.cbs2q43 = val;

break;
        
case 'cbs2q44':

CheckService.cbs2q44 = val;

break;
        
case 'cbs2q45':

CheckService.cbs2q45 = val;

break;
}

CheckService.qs2p4+= val; 
vm.currentPage = CheckService.qs2p4; 
   
}

}
