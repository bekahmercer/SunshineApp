angular.module('app')
    .controller('SummaryThreeController', SummaryThreeController) 

SummaryThreeController.$inject = ['$scope', 'CheckService'];

function SummaryThreeController ($scope, CheckService) {
    vm = this;


$scope.getPercentage = function(maxVal)
{
return ((vm.total/maxVal)*100);
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
}
if ((vm.p1>=3 && vm.p1<=4) || (vm.p2>=3 && vm.p2<=4))
{
vm.scale = "warning";
vm.riskm = "You have a some risk factors to consider";
}
if((vm.p1>=5) || (vm.p2>=5))
{
vm.scale = "danger";
vm.riskm = "You have several risk factors to consider";
}

}
