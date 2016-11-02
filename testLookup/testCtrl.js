angular.module('app')
    .controller('TestController', TestController)

TestController.$inject = ['$scope']

function TestController($scope) {
    vm = this

  
 
    
    //changes input to lowercase if vm.test has anything input 
    if (vm.test) {
        vm.test.toLowerCase()
    }
}