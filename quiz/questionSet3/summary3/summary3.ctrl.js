angular.module('app')
    .controller('SummaryThreeController', SummaryThreeController) 

SummaryThreeController.$inject = ['$scope', 'CheckService'];

function SummaryThreeController ($scope, CheckService) {
    vm = this;

CheckService.qs3summary = (CheckService.qs3p1 + CheckService.qs3p2);
vm.total = CheckService.qs3summary;

}
