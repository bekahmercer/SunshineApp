angular.module('app')
    .controller("ThreeOneController", ThreeOneController)

ThreeOneController.$inject = ['$scope', 'CheckService'];


function ThreeOneController($scope, CheckService) {


var vm = this;

vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }

vm.cbs3q11 = CheckService.cbs3q11;
vm.cbs3q12 = CheckService.cbs3q12;
vm.cbs3q13 = CheckService.cbs3q13;
vm.cbs3q14 = CheckService.cbs3q14;
vm.cbs3q15 = CheckService.cbs3q15;

vm.currentPage = CheckService.qs3p1; 
vm.total = CheckService.total; 

$scope.cbChange = function(val, selectedCb) { 

switch(selectedCb)
{
case 'cbs3q11':

CheckService.cbs3q11 = val;

break;

case 'cbs3q12':

CheckService.cbs3q12 = val;

break;

case 'cbs3q13':

CheckService.cbs3q13 = val;

break;
        
case 'cbs3q14':

CheckService.cbs3q14 = val;

break;
        
case 'cbs3q15':

CheckService.cbs3q15 = val;

break;
}

CheckService.qs3p1+= val;
vm.currentPage = CheckService.qs3p1; 

}
}
