angular.module('app')
.controller('OneThreeController', OneThreeController)

OneThreeController.$inject = ['$scope', 'CheckService']

function OneThreeController($scope, CheckService) {

var vm = this;

vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }

vm.cb1 = CheckService.cb1; //Reads the status of the checkbox from service if this one has been assigned values, is empty by default
vm.cb2 = CheckService.cb2;
vm.cb3 = CheckService.cb3;
    
//cbs1q11 == cb set 1 page 1 question 1
//cbs1q12 == cb set 1 page 1 question 2
vm.cbs1q31 = CheckService.cbs1q31;
vm.cbs1q32 = CheckService.cbs1q32;
vm.cbs1q33 = CheckService.cbs1q33;
vm.cbs1q34 = CheckService.cbs1q34;
vm.cbs1q35 = CheckService.cbs1q35;

vm.currentPage = CheckService.page1; //Reads the points achieved by this particular page from the service, by default is 0.

vm.total = CheckService.total; //Reads the points achieved in all the pages, by default is 0.

$scope.cbChange = function(val, selectedCb) { //Function that takes the numerical number associated with the checkbox and the name of the checkbox to save the value to the corresponding object in the service (cb1 to cb3 in this page)

switch(selectedCb)
{
case 'cbs1q31':

CheckService.cbs1q31 = val;

break;

case 'cbs1q32':

CheckService.cbs1q32 = val;

break;

case 'cbs1q33':

CheckService.cbs1q33 = val;

break;
        
case 'cbs1q34':

CheckService.cbs1q34 = val;

break;
        
case 'cbs1q35':

CheckService.cbs1q35 = val;

break;
}

CheckService.qs1p3+= val; //updates the total for the page 1 into the service
vm.currentPage = CheckService.qs1p3; //Updates the current view (text box)

//CheckService.total = (CheckService.page1 + CheckService.page2 + CheckService.page3); //Adds all the points achieved in all pages
//vm.total = CheckService.total; //Updates the view (text box)

}
}
