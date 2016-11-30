angular.module('app')
    .controller("ThreeTwoController", ThreeTwoController)

ThreeTwoController.$inject = ['$scope', 'CheckService'];

function ThreeTwoController($scope, CheckService) {
    

var vm = this;

vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }
   
vm.cbs3q21 = CheckService.cbs3q21;
vm.cbs3q22 = CheckService.cbs3q22;
vm.cbs3q23 = CheckService.cbs3q23;
vm.cbs3q24 = CheckService.cbs3q24;
vm.cbs3q25 = CheckService.cbs3q25;

vm.currentPage = CheckService.qs3p2; 
vm.total = CheckService.total; 

$scope.cbChange = function(val, selectedCb) { 

switch(selectedCb)
{
case 'cbs3q21':

CheckService.cbs3q21 = val;

break;

case 'cbs3q22':

CheckService.cbs3q22 = val;

break;

case 'cbs3q23':

CheckService.cbs3q23 = val;

break;
        
case 'cbs3q24':

CheckService.cbs3q24 = val;

break;
        
case 'cbs3q25':

CheckService.cbs3q25 = val;

break;
}

CheckService.qs3p2+= val;
vm.currentPage = CheckService.qs3p2;

}
}
