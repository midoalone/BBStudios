'use strict';

StudiosModule
    .component('', {
        templateUrl: './components//template.html',
        bindings: {
            name: '@',
            title: '@'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {

        }
    });