angular.module('StudiosModule')
    .directive('checkboxGroup', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'checkbox/template.html',
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

    .directive('checkbox', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'checkbox/item_template.html',
            scope: {
                title: '@',
                value: '@',
                switch: '@'
            },
            require: '^checkboxGroup',
            link: function (scope,element,attrs,parentCtrl) {
                scope.name = parentCtrl.name;
                scope.id = attrs.id;
            }
        };
    });