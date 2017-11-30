'use strict';

var StudiosModule = angular.module('StudiosModule', ['ng-slide-down'])
    .controller('rootController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.json = {};

        $rootScope.$watch(function(){
            return $rootScope.json;
        },function (){
            $scope.json = $rootScope.json;
        }, true);
    }]);
