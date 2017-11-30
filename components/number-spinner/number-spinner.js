'use strict';

StudiosModule.
component('numberSpinner', {
    templateUrl: './components/number-spinner/number-spinner.html',
    bindings: {
        name: '@'
    },
    transclude: true,
    controller: function ($scope, $rootScope) {
        var self = this;
        this.$onInit = function () {
            $scope.change = function (){
                $rootScope.json[self.name] = {
                    value: $scope.count,
                    unit: 'px'
                };
            }
        }
    }
});