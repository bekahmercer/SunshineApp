angular.module('app')
.controller('SummaryOneController', SummaryOneController)

SummaryOneController.$inject = ['$scope', 'CheckService']

function SummaryOneController($scope, CheckService) {

    vm = this;
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:
 
if(CheckService.emergencies>0)
{
$location.path("/");
}

    
    vm.scrollUp = function() {
        window.scrollTo(0, 0);
    }
    
    CheckService.qs1summary = (CheckService.qs1p1 + CheckService.qs1p2 + CheckService.qs1p3 + CheckService.qs1p4);
    vm.total = CheckService.qs1summary;
    
    $scope.getPercentage = function(maxVal)
    {
        vm.pbarData = CheckService.calculatePercentage(maxVal, vm.total);
        return vm.pbarData
    }
    
    if(vm.total>=0 && vm.total<=9)
        {
        vm.scale = "success";
        vm.riskm = "You don't have many relationship risk factors.";
        // shade of green
        vm.color = "#5cb85c";
        }
        else if (vm.total>=10 & vm.total<=19)
        {
        vm.scale = "warning";
        vm.riskm = "You have some risk factors to consider.";
        vm.color = "orange";
        }
        else {
        vm.scale = "danger";
        vm.riskm = "You have several risk factors to consider.";
        vm.color = "red";
        }
}
