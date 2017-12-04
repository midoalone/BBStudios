'use strict';

StudiosModule
    .component('color', {
        templateUrl: './components/color/template.html',
        bindings: {
            name: '@',
            title: '@'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {

        }
    });