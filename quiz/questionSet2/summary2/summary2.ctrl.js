angular.module('app')
    .controller('SummaryTwoController', SummaryTwoController) 

SummaryTwoController.$inject = ['$scope', 'CheckService'];

function SummaryTwoController ($scope, CheckService) {
    vm = this;

    vm.scrollUp = function() {
    window.scrollTo(0, 0);
  }

CheckService.qs2summary = (CheckService.qs2p1 + CheckService.qs2p2 + CheckService.qs2p3 + CheckService.qs2p4 + CheckService.qs2p5);
vm.total = CheckService.qs2summary;

vm.pbar1 = CheckService.qs2p1;
vm.pbar2 = CheckService.qs2p2;
vm.pbar3 = CheckService.qs2p3;
vm.pbar4 = CheckService.qs2p4;
vm.pbar5 = CheckService.qs2p5;

/*$scope.getPercentage = function(maxVal)
 {
 return ((vm.total/maxVal)*100);
 }
*/


if(CheckService.qs2p1>=0 && CheckService.qs2p1<=2)
  {
 vm.scale1 = "success";
 vm.riskm1 = "You are in low risk";
 }
 else if (CheckService.qs2p1>=3 & CheckService.qs2p1<=4)
 {
 vm.scale1 = "warning";
 vm.riskm1 = "Your risk is moderate";
 }
 else {
 vm.scale1 = "danger";
 vm.riskm1 = "You really are in high risk";
 }


if(CheckService.qs2p2>=0 && CheckService.qs2p2<=2)
  {
 vm.scale2 = "success";
 vm.riskm2 = "You are in low risk";
 }
 else if (CheckService.qs2p2>=3 & CheckService.qs2p2<=4)
 {
 vm.scale2 = "warning";
 vm.riskm2 = "Your risk is moderate";
 }
 else {
 vm.scale2 = "danger";
 vm.riskm2 = "You really are in high risk";
 }


if(CheckService.qs2p3>=0 && CheckService.qs2p3<=2)
  {
 vm.scale3 = "success";
 vm.riskm3 = "You are in low risk";
 }
 else if (CheckService.qs2p3>=3 & CheckService.qs2p3<=4)
 {
 vm.scale3 = "warning";
 vm.riskm3 = "Your risk is moderate";
 }
 else {
 vm.scale3 = "danger";
 vm.riskm3 = "You really are in high risk";
 }


if(CheckService.qs2p4>=0 && CheckService.qs2p4<=2)
  {
 vm.scale4 = "success";
 vm.riskm4 = "You are in low risk";
 }
 else if (CheckService.qs2p4>=3 & CheckService.qs2p4<=4)
 {
 vm.scale4 = "warning";
 vm.riskm4 = "Your risk is moderate";
 }
 else {
 vm.scale4 = "danger";
 vm.riskm4 = "You really are in high risk";
 }



if(CheckService.qs2p5>=0 && CheckService.qs2p5<=2)
  {
 vm.scale5 = "success";
 vm.riskm5 = "You are in low risk";
 }
 else if (CheckService.qs2p5>=3 & CheckService.qs2p5<=4)
 {
 vm.scale5 = "warning";
 vm.riskm5 = "Your risk is moderate";
 }
 else {
 vm.scale5 = "danger";
 vm.riskm5 = "You really are in high risk";
 }
}
