angular.module('app')
.controller('EmergencyController', EmergencyController)

EmergencyController.$inject = ['$scope', 'CheckService', '$location']

function EmergencyController($scope, CheckService, $location) {

vm = this;

CheckService.emergencies++;
$location.path("/");
  
}
