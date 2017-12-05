StudiosModule
    .component('panel', {
        templateUrl: 'panel/template.html',
        bindings: {
            title: '@',
            name: '@',
            collapsible: '@',
            enable: '@'
        },
        transclude: true,
        controller: function ($scope, $rootScope) {
            var self = this;

            this.$onInit = function (){
                var isEnabled = true,
                    isExpanded = undefined;

                // Enabled / Disabled
                if(self.enable){
                    isEnabled = JSON.parse(self.enable.toLowerCase());
                }

                // Expanded / Collapsed
                if(self.collapsible){
                    isExpanded = JSON.parse(self.collapsible.toLowerCase());
                }

                if(!$rootScope.json[self.name]){
                    $rootScope.json[self.name] = {
                        enable: isEnabled,
                        expanded: isExpanded
                    };
                }
            }
        }
    });