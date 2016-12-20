(function () {
    'use strict';

    angular
        .module('app')
        .factory('CityResourceService', CityResourceService);

    CityResourceService.$inject = ['$resource']

    function CityResourceService($resource) {
        return $resource('../data/resourcesData.json')
    }
})();