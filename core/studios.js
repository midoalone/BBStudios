'use strict';

var StudiosModule = angular.module('StudiosModule', ['ng-slide-down', 'checklist-model'])

    .factory('studioService', function (){
        return {

        }
    })

    .run(function ($rootScope, studioService){
        // Global json
        $rootScope.json = {};
    })

    .controller('rootController', function ($scope, $rootScope) {

        $rootScope.$watch(function(){
            return $rootScope.json;
        },function (){
            $('#json').val(JSON.stringify($rootScope.json));
        }, true);

        $scope.save = function (){
            angular.forEach($rootScope.json, function (value, key){
                console.log(value, key);
            });
        }

    });
