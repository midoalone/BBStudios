'use strict';

StudiosModule.
component('numberSpinner', {
    templateUrl: './components/number-spinner/template.html',
    bindings: {
        name: '@',
        parent: '@'
    },
    transclude: true,
    controller: function ($scope, $rootScope) {
        var self = this;
        $scope.change = function ($id){
            if(!$rootScope.json[self.name]) $rootScope.json[self.name] = {};
            $rootScope.json[self.name][$id] = $scope.count;
        };
    }
});