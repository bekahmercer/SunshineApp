angular.module('app')
    .controller('TwoOneController', TwoOneController) 

TwoOneController.$inject = ['$scope', 'CheckService'];

function TwoOneController ($scope, CheckService) {

var vm = this;

vm.cbs2q11 = CheckService.cbs2q11; 
vm.cbs2q12 = CheckService.cbs2q12;
vm.cbs2q13 = CheckService.cbs2q13;
vm.cbs2q14 = CheckService.cbs2q14;
vm.cbs2q15 = CheckService.cbs2q15;    

vm.currentPage = CheckService.qs2p1; 
vm.total = CheckService.total; 

$scope.cbChange = function(val, selectedCb) { 

switch(selectedCb)
{
case 'cbs2q11':

CheckService.cbs2q11 = val;

break;

case 'cbs2q12':

CheckService.cbs2q12 = val;

break;

case 'cbs2q13':

CheckService.cbs2q13 = val;

break;
        
case 'cbs2q14':

CheckService.cbs2q14 = val;

break;
        
case 'cbs2q15':

CheckService.cbs2q15 = val;

break;
}

CheckService.qs2p1+= val; 
vm.currentPage = CheckService.qs2p1; 
   
}
}
