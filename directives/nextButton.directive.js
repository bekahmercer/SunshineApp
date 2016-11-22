angular.module('app')
    .directive('nextButton', nextButton)

    function nextButton() {
        return {
            templateUrl: '/directives/nextButton.html'
        }
    }