'use strict';

StudiosModule.
component('panel', {
    templateUrl: './components/panel/panel.html',
    bindings: {
        title: '@'
    },
    transclude: true,
    controller: function ($scope, $rootScope) {
        var self = this;

        // Init
        this.$onInit = function () {

        };

        $scope.collapse_panel = function (){

        }
    }
});