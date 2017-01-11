angular.module('app')
    .controller('LocalResourcesController', LocalResourcesController)


LocalResourcesController.$inject = ['$scope', 'CityService', 'CityResourceService', 'CheckService', '$location']

function LocalResourcesController($scope, CityService, CityResourceService, CheckService, $location) {
    vm = this;

    //$scope.citiesList = CityService
    
    //Checks if emergency button was pressed before, if it was then it redirects to main page:

if(CheckService.emergencies>0)
{
$location.path("/");
}


    $scope.CityresourceArray = CityResourceService.query(CitiesListFunc)

    function CitiesListFunc(data) {
        $scope.citiesList = data
    }



    //changes input to lowercase if vm.test has anything input 
    if (vm.testCasing) {
        vm.testCasing.toLowerCase()
    }
}
