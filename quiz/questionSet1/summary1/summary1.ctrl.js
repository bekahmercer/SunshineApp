angular.module('app')
.controller('SummaryOneController', SummaryOneController)

SummaryOneController.$inject = ['$scope', 'CheckService']

function SummaryOneController($scope, CheckService) {

vm = this;
CheckService.qs1summary = (CheckService.qs1p1 + CheckService.qs1p2 + CheckService.qs1p3 + CheckService.qs1p4);
vm.total = CheckService.qs1summary;

}
