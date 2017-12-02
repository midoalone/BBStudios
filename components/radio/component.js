'use strict';

StudiosModule
    .component('radioGroup', {
        templateUrl: './components/radio/template.html',
        bindings: {
            name: '@',
            title: '@'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {

        }
    })
    .component('radio', {
        templateUrl: './components/radio/item_template.html',
        bindings: {
            name: '@',
            value: '@',
            title: '@'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {

        }
    });