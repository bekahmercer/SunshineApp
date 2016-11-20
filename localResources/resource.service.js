(function () {
    'use strict';

    angular
        .module('app')
        .factory('ResourceService', ResourceService);

   
    function ResourceService($resource) {
        return $resource('../data/resources.json')
    }
})();

