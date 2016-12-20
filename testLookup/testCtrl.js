angular.module('app')
    .controller('TestController', TestController)

TestController.$inject = ['$scope', 'CityService', 'ResourceService']

function TestController($scope, CityService, ResourceService) {
    vm = this;

    $scope.citiesList = CityService

    $scope.resourceArray = ResourceService
    console.log($scope.resourceArray)


    function matchCounty(countyFromCounties) {
        $scope.resourceArray.resources.forEach(function (countyFromCounties) {
            if (countyFromCounties == resourceArray.county) {
                console.log("hello")
            }
        })
    }

    //changes input to lowercase if vm.test has anything input 
    if (vm.test) {
        vm.test.toLowerCase()
    }
}


/*theApp.factory('mainInfo', function($http) { 

    var obj = {content:null};

    $http.get('content.json').success(function(data) {
        // you can do some processing here
        obj.content = data;
    });    

    return obj;    
});*/