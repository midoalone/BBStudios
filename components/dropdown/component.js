'use strict';

StudiosModule
    .component('dropdown', {
        templateUrl: './components/dropdown/template.html',
        bindings: {
            name: '@',
            title: '@',
            options: '<'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {
            var self = this;

            this.$onInit = function () {
                if(self.options){
                    $scope.options = self.options;
                }
            };
        }
    });