'use strict';

StudiosModule.
component('panel', {
    templateUrl: './components/panel/template.html',
    bindings: {
        title: '@',
        name: '@'
    },
    transclude: true,
    controller: function ($scope, $rootScope) {
        var self = this;

        $scope.collapse_panel = function (){

        }
    }
});