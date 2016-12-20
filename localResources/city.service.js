(function () {
    'use strict';

    angular
        .module('app')
        .factory('CityService', CityService);

    CityService.$inject = ['$http'];
    function CityService($http) {
        var service = { city: null }
        service.city = cityList()

        return service;

        function cityList() {
            $http.get('../data/city_county.json').success(function (data) {
                service.city = data

            })
        }
    }
})();