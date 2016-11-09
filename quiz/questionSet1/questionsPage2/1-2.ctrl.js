angular.module('app')
.controller('OneTwoController', OneTwoController)

OneTwoController.$inject = ['$scope', 'CheckService'];

function OneTwoController($scope, CheckService) {

var vm = this;

vm.cb4 = CheckService.cb4; //Reads the status of the checkbox from service if this one has been assigned values, is empty by default
vm.cb5 = CheckService.cb5;
vm.cb6 = CheckService.cb6;
vm.cbs1q21 = CheckService.cbs1q21;
vm.cbs1q22 = CheckService.cbs1q22;
vm.cbs1q23 = CheckService.cbs1q23;
vm.cbs1q24 = CheckService.cbs1q24;
vm.cbs1q25 = CheckService.cbs1q25;

vm.currentPage = CheckService.page2; //Reads the points achieved by this particular page from the service, by default is 0.

vm.total = CheckService.total; //Reads the points achieved in all the pages, by default is 0.

$scope.cbChange = function(val, selectedCb) { //Function that takes the numerical number associated with the checkbox and the name of the checkbox to save the value to the corresponding object in the service (cb4 to cb6 in this page)

switch(selectedCb)
{
        
case 'cbs1q21':

CheckService.cbs1q21 = val;

break;

case 'cbs1q22':

CheckService.cbs1q22 = val;

break;

case 'cbs1q23':

CheckService.cbs1q23 = val;

break;
        
case 'cbs1q24':

CheckService.cbs1q24 = val;

break;

case 'cbs1q25':

CheckService.cbs1q25 = val;

break;
}

CheckService.page2+= val; //updates the total for the page 1 into the service
vm.currentPage = CheckService.page2; //Updates the current view (text box)

CheckService.total = (CheckService.page1 + CheckService.page2 + CheckService.page3); //Adds all the points achieved in all pages
vm.total = CheckService.total; //Updates the view (text box)

}
}
