'use strict';

StudiosModule
    .component('spinnerDropdown', {
        templateUrl: './components/spinner-dropdown/template.html',
        bindings: {
            name: '@',
            title: '@',
            options: '<'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {
            var self = this;

            this.$onInit = function () {
                if(!self.options){
                    $scope.options = ["auto" ,"px", "em", "%"];
                }else{
                    $scope.options = self.options;
                }
            };
        }
    });