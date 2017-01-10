angular.module('app')
.controller('OneOneController', OneOneController)

OneOneController.$inject = ['$scope', 'CheckService', '$location']

function OneOneController($scope, CheckService, $location) {

var vm = this;

//Checks if emergency button was pressed before, if it was then it redirects to main page:

if(CheckService.emergencies>0)
{
$location.path("/");
}


  vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }

vm.cbs1q11 = CheckService.cbs1q11; //Reads the status of the checkbox from service if this one has been assigned values, is empty by default
vm.cbs1q12 = CheckService.cbs1q12;
vm.cbs1q13 = CheckService.cbs1q13;
vm.cbs1q14 = CheckService.cbs1q14;
vm.cbs1q15 = CheckService.cbs1q15;    
//cbs1q11 == cb set 1 page 1 question 1
//cbs1q12 == cb set 1 page 1 question 2

vm.currentPage = CheckService.qs1p1; //Reads the points achieved by this particular page from the service, by default is 0.

vm.total = CheckService.total; //Reads the points achieved in all the pages, by default is 0.

$scope.cbChange = function(val, selectedCb) { //Function that takes the numerical number associated with the checkbox and the name of the checkbox to save the value to the corresponding object in the service (cb1 to cb3 in this page)

switch(selectedCb)
{
case 'cbs1q11':

CheckService.cbs1q11 = val;

break;

case 'cbs1q12':

CheckService.cbs1q12 = val;

break;

case 'cbs1q13':

CheckService.cbs1q13 = val;

break;
        
case 'cbs1q14':

CheckService.cbs1q14 = val;

break;
        
case 'cbs1q15':

CheckService.cbs1q15 = val;

break;
}

CheckService.qs1p1+= val; //updates the total for the page 1 into the service
vm.currentPage = CheckService.qs1p1; //Updates the current view (text box)

/*CheckService.total = (CheckService.qs1p1 + CheckService.qs2p1 + CheckService.qs3p1); //Adds all the points achieved in all pages
vm.total = CheckService.total; //Updates the view (text box)*/


}
}
