StudiosModule.controller('textStudio', function ($scope) {
    $scope = $scope.$parent;
    $scope.getStyle = function (json) {
        console.log(json);
        var style = '{';

        angular.forEach(json, function (value, key){
            style += key + ": " + value.value + value.unit + ";";
        });

        style += '}';

        return style;
    }
});