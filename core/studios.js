angular.module('StudiosModule', ['ng-slide-down', 'checklist-model', 'rzModule', 'color.picker'])

    .factory('studioService', function (){
        return {
            saveData: function (data, fileName) {
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";

                var blob = new Blob([data], {type: "octet/stream"}),
                    url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
                a.click();
                window.URL.revokeObjectURL(url);
            }
        }
    })

    .run(function ($rootScope){
        // Global json
        $rootScope.json = {};
        // Check if there is a saved settings
        if(localStorage.getItem("BBStudioJSONSettings")){
            var rootJSON = JSON.parse(localStorage.getItem("BBStudioJSONSettings"));
            if(rootJSON){
                $rootScope.json = rootJSON;
            }
        }else{
            $rootScope.json = JSON.parse('{"shadows":[],"basic":{"enable":true,"expanded":true},"shadow":{"enable":true,"expanded":false},"animation":{"27":"shake","enable":false,"expanded":false},"shadow-x":{"58":2,"59":2,"102":3,"113":3},"font-size":{"45":27,"55":32},"line-height":{"46":2,"56":2},"letter-spacing":{"47":3,"57":2},"font-family":{"20":"Times New Roman","24":"Verdana"},"text-transform":{"21":"lowercase","25":"lowercase"},"text-decoration":{"26":"none"},"color":{"42":"rgb(231, 35, 35)","46":"rgb(94, 175, 172)"},"font-weight":["bold"],"font-style":["italic"],"text-align":"left"}');
        }
    })

    .controller('rootController', function ($scope, $rootScope, studioService) {

        $rootScope.$watch(function(){
            return $rootScope.json;
        },function (){
            $('#json').val(JSON.stringify($rootScope.json));
            // Save in localstorage
            localStorage.setItem("BBStudioJSONSettings", JSON.stringify($rootScope.json));
        }, true);

        $scope.save = function (){
            alert($rootScope.css);
        };

        $scope.download = function (type){
            var data = $rootScope.css;
            if(type === "json") data = JSON.stringify($rootScope.json);

            studioService.saveData(data, 'studioClass.' + type);
        };

    });
