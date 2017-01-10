angular.module('app')
    .controller('SummaryThreeController', SummaryThreeController) 

SummaryThreeController.$inject = ['$scope', 'CheckService'];

function SummaryThreeController ($scope, CheckService) {
    vm = this;
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:
 
if(CheckService.emergencies>0)
{
$location.path("/");
}


    $scope.getPercentage = function(maxVal)
    {
    vm.pbarData = CheckService.calculatePercentage(maxVal, vm.total);
    return vm.pbarData
    }

    vm.scrollUp = function() {
        window.scrollTo(0, 0);
    }

    CheckService.qs3summary = (CheckService.qs3p1 + CheckService.qs3p2);
    vm.total = CheckService.qs3summary;
    
    vm.p1 = CheckService.qs3p1;
    vm.p2 = CheckService.qs3p2;
    
    if((vm.p1>=0 && vm.p1<=2) && (vm.p2>=0 && vm.p2<=2))
    {
        vm.scale = "success";
        vm.riskm = "You don't have many relationship factors";
        // shade of green
        vm.color = "#5cb85c";
    }
    if ((vm.p1>=3 && vm.p1<=4) || (vm.p2>=3 && vm.p2<=4))
    {
        vm.scale = "warning";
        vm.riskm = "You have a some risk factors to consider";
        vm.color = "orange";
    }
    if((vm.p1>=5) || (vm.p2>=5))
    {
        vm.scale = "danger";
        vm.riskm = "You have several risk factors to consider";
        vm.color = "red";
    }

}
