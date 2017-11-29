'use strict';

var StudiosModule = angular.module('StudiosModule', [])
    .controller('rootController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.json = {};
        $scope.test = "Hello";

        $rootScope.$watch(function(){
            return $rootScope.json;
        },function (){
            $scope.json = $rootScope.json;
            console.log($rootScope.json);
        }, true);
    }]);
