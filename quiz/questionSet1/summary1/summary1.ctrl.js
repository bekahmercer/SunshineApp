angular.module('app')
.controller('SummaryOneController', SummaryOneController)

SummaryOneController.$inject = ['$scope', 'CheckService']

function SummaryOneController($scope, CheckService) {

vm = this;
CheckService.qs1summary = (CheckService.qs1p1 + CheckService.qs1p2 + CheckService.qs1p3 + CheckService.qs1p4);
vm.total = CheckService.qs1summary;


if(vm.total>=0 && vm.total<=9)
{
vm.scale = "success";
vm.riskm = "You are in low risk";
}
else if (vm.total>=10 & vm.total<=19)
{
vm.scale = "warning";
vm.riskm = "Your risk is moderate";
}
else {
vm.scale = "danger";
vm.riskm = "You really are in high risk";
}

}
