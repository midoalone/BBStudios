StudiosModule
    .directive('radioGroup', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'radio/template.html',
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
            templateUrl: 'radio/item_template.html',
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