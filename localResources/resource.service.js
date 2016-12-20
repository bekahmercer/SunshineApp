(function () {
    'use strict';

    angular
        .module('app')
        .factory('ResourceService', ResourceService);


    ResourceService.$inject = ['$resource']

    function ResourceService($resource) {
        return $resource('../data/resources.json')
    }
})();

