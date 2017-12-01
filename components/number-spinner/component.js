'use strict';

StudiosModule.
component('numberSpinner', {
    templateUrl: './components/number-spinner/template.html',
    bindings: {
        name: '@',
        title: '@'
    },
    transclude: true,
    controller: function ($scope, $rootScope) {

    }
});