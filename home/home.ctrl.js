angular.module('app').controller('HomeController', HomeController)

function HomeController($scope, $http) {
    $http.get('data/activities.json').then(function (res) {
        $scope.activities = res.data;
        return $http.get('data/parks.json');
    }).then(function(res2) {
        $scope.parks = res2.data; // get data from json
    
    });
};
