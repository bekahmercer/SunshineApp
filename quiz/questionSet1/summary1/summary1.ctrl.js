angular.module('app')
.controller('SummaryOneController', SummaryOneController)

SummaryOneController.$inject = ['$scope', 'CheckService']

function SummaryOneController($scope, CheckService) {

vm = this;

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
}
else if (vm.total>=10 & vm.total<=19)
{
vm.scale = "warning";
vm.riskm = "You have a some risk factors to consider.";
}
else {
vm.scale = "danger";
vm.riskm = "You have several risk factors to consider.";
}

}
