StudiosModule
    .component('numberSlider', {
        templateUrl: 'number-slider/template.html',
        bindings: {
            name: '@',
            title: '@',
            options: '<'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {
            var self = this;

            this.$onInit = function () {
                if (!self.options) {
                    $scope.options = {
                        floor: 0,
                        ceil: 100,
                        value: 0
                    };
                } else {
                    var options = self.options;
                    if(!options.value) options.value = options.floor;
                    $scope.options = options;
                }
            }
        }
    });