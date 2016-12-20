angular.module('app')
    .controller('LocalResourcesController', LocalResourcesController)


LocalResourcesController.$inject = ['$scope', 'CityService', 'CityResourceService']

function LocalResourcesController($scope, CityService, CityResourceService) {
    vm = this;

    //$scope.citiesList = CityService


    $scope.CityresourceArray = CityResourceService.query(CitiesListFunc)

    function CitiesListFunc(data) {
        $scope.citiesList = data
    }



    //changes input to lowercase if vm.test has anything input 
    if (vm.testCasing) {
        vm.testCasing.toLowerCase()
    }
}