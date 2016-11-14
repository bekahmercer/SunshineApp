angular.module('app')
  .controller('LocalResourcesController', LocalResourcesController)


LocalResourcesController.$inject = ['$scope', 'CityService', 'ResourceService']

function LocalResourcesController($scope, CityService, ResourceService) {
    vm = this;

   $scope.citiesList = CityService
   
  $scope.resourceArray = ResourceService
 
    
    //changes input to lowercase if vm.test has anything input 
    if (vm.test) {
        vm.test.toLowerCase()
    }
}