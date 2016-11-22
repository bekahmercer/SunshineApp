angular.module('app')
    .controller('SummaryThreeController', SummaryThreeController) 

SummaryThreeController.$inject = ['$scope', 'CheckService'];

function SummaryThreeController ($scope, CheckService) {
    vm = this;

CheckService.qs3summary = (CheckService.qs3p1 + CheckService.qs3p2);
vm.total = CheckService.qs3summary;

vm.pbar1 = CheckService.qs3p1;
vm.pbar2 = CheckService.qs3p2;

 if(CheckService.qs3p1>=0 && CheckService.qs3p1<=2)
{
vm.scale1 = "success";
vm.riskm1 = "You are in low risk";
}
else if (CheckService.qs3p1>=3 & CheckService.qs3p1<=4)
{
vm.scale1 = "warning";
vm.riskm1 = "Your risk is moderate";
}
else {
vm.scale1 = "danger";
vm.riskm1 = "You really are in high risk";
}


 if(CheckService.qs3p2>=0 && CheckService.qs3p2<=2)
{
vm.scale2 = "success";
vm.riskm2 = "You are in low risk";
}
else if (CheckService.qs3p2>=3 & CheckService.qs3p2<=4)
{
vm.scale2 = "warning";
vm.riskm2 = "Your risk is moderate";
}
else {
vm.scale2 = "danger";
vm.riskm2 = "You really are in high risk";
}
}
