angular.module('app')
    .controller('SummaryTwoController', SummaryTwoController) 

SummaryTwoController.$inject = ['$scope', 'CheckService'];

function SummaryTwoController ($scope, CheckService) {
    vm = this;
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:
 
if(CheckService.emergencies>0)
{
$location.path("/");
}


    CheckService.qs2summary = (CheckService.qs2p1 + CheckService.qs2p2 + CheckService.qs2p3 + CheckService.qs2p4 + CheckService.qs2p5);
    vm.total = CheckService.qs2summary;
    
    vm.p1 = CheckService.qs2p1;
    vm.p2 = CheckService.qs2p2;
    vm.p3 = CheckService.qs2p3;
    vm.p4 = CheckService.qs2p4;
    vm.p5 = CheckService.qs2p5;
    
    $scope.getPercentage = function(maxVal)
    {
        vm.pbarData = CheckService.calculatePercentage(maxVal, vm.total);
        return vm.pbarData
    }
    
    if((vm.p1>=0 && vm.p1<=2) && (vm.p2>=0 && vm.p2<=2) && (vm.p3>=0 && vm.p3<=2) && (vm.p4>=0 && vm.p4<=2) && (vm.p5>=0 && vm.p5<=2))
    {
        vm.scale = "success";
        vm.riskm = "You don't have many relationships factors";
        // shade of green
        vm.color = "#5cb85c";
    }
    if ((vm.p1>=3 && vm.p1<=4) || (vm.p2>=3 && vm.p2<=4) || (vm.p3>=3 && vm.p3<=4) || (vm.p4>=3 && vm.p4<=4) || (vm.p5>=3 && vm.p5<=4))
    {
        vm.scale = "warning";
        vm.riskm = "You have a some risk factors to consider";
        vm.color = "orange";
    }
    if ((vm.p1>=5) || (vm.p2>=5) || (vm.p3>=5) || (vm.p4>=5) || (vm.p5>=5))
    {
        vm.scale = "danger";
        vm.riskm = "You have several risk factors to consider";
        vm.color = "red";
    }

}
