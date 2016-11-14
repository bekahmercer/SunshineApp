(function () {
    'use strict';

    angular
        .module('app')
        .factory('ResourceService', ResourceService);

    ResourceService.$inject = ['$http'];
    function ResourceService($http) {
        var service = {resources: null}
        service.resources = resourceList()
        
        return service

        ////////////////
        function resourceList() {
            $http.get('../data/resources_temp.json').success(function (data) {
               service.resources = data
               
               
            });
        }
    }
})();