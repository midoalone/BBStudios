StudiosModule
    .component('', {
        templateUrl: '/template.html',
        bindings: {
            name: '@',
            title: '@'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {

        }
    });