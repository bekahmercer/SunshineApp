angular.module('app')
    .controller('TestController', TestController)

TestController.$inject = ['$scope', 'CityService']

function TestController($scope, CityService) {
    vm = this;

   $scope.citiesList = CityService
   
 
    
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