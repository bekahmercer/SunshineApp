angular.module('app')
    .controller('SummaryTwoController', SummaryTwoController) 

SummaryTwoController.$inject = ['$scope', 'CheckService'];

function SummaryTwoController ($scope, CheckService) {
    vm = this;

CheckService.qs2summary = (CheckService.qs2p1 + CheckService.qs2p2 + CheckService.qs2p3 + CheckService.qs2p4 + CheckService.qs2p5);
vm.total = CheckService.qs2summary;
}
