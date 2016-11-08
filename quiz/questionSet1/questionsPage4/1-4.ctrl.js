angular.module('app')
.controller('OneFourController', OneFourController)

OneFourController.$inject = ['$scope', 'CheckService']

function OneFourController($scope, CheckService) {

var vm = this;

 //Reads the status of the checkbox from service if this one has been assigned values, is empty by default
    
//cbs1q11 == cb set 1 page 1 question 1
//cbs1q12 == cb set 1 page 1 question 2
vm.cbs1q41 = CheckService.cbs1q41;
vm.cbs1q42 = CheckService.cbs1q42;
vm.cbs1q43 = CheckService.cbs1q43;
vm.cbs1q44 = CheckService.cbs1q44;
vm.cbs1q45 = CheckService.cbs1q45;

vm.currentPage = CheckService.qs1p4; //Reads the points achieved by this particular page from the service, by default is 0.

vm.total = CheckService.total; //Reads the points achieved in all the pages, by default is 0.

$scope.cbChange = function(val, selectedCb) { //Function that takes the numerical number associated with the checkbox and the name of the checkbox to save the value to the corresponding object in the service (cb1 to cb3 in this page)

switch(selectedCb)
{
case 'cbs1q41':

CheckService.cbs1q41 = val;

break;

case 'cbs1q42':

CheckService.cbs1q42 = val;

break;

case 'cbs1q43':

CheckService.cbs1q43 = val;

break;
        
case 'cbs1q44':

CheckService.cbs1q44 = val;

break;
        
case 'cbs1q45':

CheckService.cbs1q45 = val;

break;
}

CheckService.qs1p4+= val; //updates the total for the page 1 into the service
vm.currentPage = CheckService.qs1p4; //Updates the current view (text box)

//CheckService.total = (CheckService.page1 + CheckService.page2 + CheckService.page3); //Adds all the points achieved in all pages
//vm.total = CheckService.total; //Updates the view (text box)

}
}
