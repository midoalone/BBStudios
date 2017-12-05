angular.module('StudiosModule')
    .component('color', {
        templateUrl: 'color/template.html',
        bindings: {
            name: '@',
            title: '@',
            options: '@'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {
            var self = this;

            this.$onInit = function () {
                $scope.options = {
                    format: "rgb",
                    swatchOnly: true
                };

                if(self.options){
                    $scope.options = self.options;
                }

                $scope.options.format = "rgb";
            };
        }
    });