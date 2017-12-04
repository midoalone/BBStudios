'use strict';

var StudiosModule = angular.module('StudiosModule', ['ng-slide-down', 'checklist-model', 'rzModule', 'color.picker'])

    .factory('studioService', function (){
        return {

        }
    })

    .run(function ($rootScope, studioService){
        // Global json
        $rootScope.json = {};
        // Check if there is a saved settings
        if(localStorage.getItem("BBStudioJSONSettings")){
            var rootJSON = JSON.parse(localStorage.getItem("BBStudioJSONSettings"));
            if(rootJSON){
                $rootScope.json = rootJSON;
            }
        }
    })

    .controller('rootController', function ($scope, $rootScope) {

        $rootScope.$watch(function(){
            return $rootScope.json;
        },function (){
            $('#json').val(JSON.stringify($rootScope.json));
            // Save in localstorage
            localStorage.setItem("BBStudioJSONSettings", JSON.stringify($rootScope.json));
        }, true);

        $scope.save = function (){
            angular.forEach($rootScope.json, function (value, key){
                console.log(value, key);
            });
        }

    });
