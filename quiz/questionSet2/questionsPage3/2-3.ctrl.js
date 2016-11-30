angular.module('app')
    .controller('TwoThreeController', TwoThreeController) 

TwoThreeController.$inject = ['$scope', 'CheckService'];

function TwoThreeController ($scope, CheckService) {
    vm = this;

    vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }

vm.cbs2q31 = CheckService.cbs2q31; 
vm.cbs2q32 = CheckService.cbs2q32;
vm.cbs2q33 = CheckService.cbs2q33;
vm.cbs2q34 = CheckService.cbs2q34;
vm.cbs2q35 = CheckService.cbs2q35;    

vm.currentPage = CheckService.qs2p3; 
vm.total = CheckService.total; 

$scope.cbChange = function(val, selectedCb) { 

switch(selectedCb)
{
case 'cbs2q31':

CheckService.cbs2q31 = val;

break;

case 'cbs2q32':

CheckService.cbs2q32 = val;

break;

case 'cbs2q33':

CheckService.cbs2q33 = val;

break;
        
case 'cbs2q34':

CheckService.cbs2q34 = val;

break;
        
case 'cbs2q35':

CheckService.cbs2q35 = val;

break;
}

CheckService.qs2p3+= val; 
vm.currentPage = CheckService.qs2p3; 
   
}
}
