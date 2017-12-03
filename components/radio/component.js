'use strict';

StudiosModule
    .directive('radioGroup', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: './components/radio/template.html',
            replace: true,
            scope: {
                name: '@',
                title: '@'
            },
            controller: function ($scope) {
                this.name = $scope.name;
            }
        };
    })
    .directive('radio', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: './components/radio/item_template.html',
            scope: {
                title: '@',
                value: '@'
            },
            require: '^radioGroup',
            link: function (scope,element,attrs,parentCtrl) {
                scope.name = parentCtrl.name;
            }
        };
    });