(function () {
    'use strict';

    angular
        .module('app')
        .factory('CityResourceService', CityResourceService);

   
    function CityResourceService($resource) {
        return $resource('../data/tempCityResources.json')
    }
})();