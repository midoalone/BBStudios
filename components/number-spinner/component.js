angular.module('StudiosModule')
    .component('numberSpinner', {
        templateUrl: 'number-spinner/template.html',
        bindings: {
            name: '@',
            title: '@'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {

        }
    });