angular.module('app').controller('HomeController', HomeController)

function HomeController($scope, $http) {
    $http.get('data/activities.json').then(function (res) {
        $scope.activities = res.data;
    });
};
