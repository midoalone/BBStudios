angular.module('StudiosModule')
    .controller('textStudio', function ($scope, $rootScope) {
    $scope = $scope.$parent;

    if(! $rootScope.json.shadows)
        $rootScope.json.shadows = [];

    $scope.demoStyle = function () {
        var json = $rootScope.json;
        var style = '{';

        if(json['font-family']) style += 'font-family:' + firstValue(json['font-family']) + ';';
        if(json['font-weight']) style += 'font-weight:' + firstValue(json['font-weight']) + ';';
        if(firstValue(json['font-style'])) style += 'font-style:' + firstValue(json['font-style']) + ';';
        if(json['text-decoration']) style += 'text-decoration:' + firstValue(json['text-decoration']) + ';';
        if(json['text-transform']) style += 'text-transform:' + firstValue(json['text-transform']) + ';';
        if(json['font-size']) style += 'font-size:' + firstValue(json['font-size']) + 'px;';
        if(json['color']) style += 'color:' + firstValue(json['color']) + ';';
        if(json['line-height']) style += 'line-height:' + firstValue(json['line-height']) + ';';
        if(json['letter-spacing']) style += 'letter-spacing:' + firstValue(json['letter-spacing']) + 'px;';
        if(json['text-align']) style += 'text-align:' + json['text-align'] + ';';


        style += '}';

        return style;
    };

    function firstValue(json){
        var i=0, out;
        angular.forEach(json, function (value, key){
            if(i===0) {
                out = value;
                i++;
            }
        });

        return out;
    }

    $rootScope.$watch(function(){
        return $rootScope.json;
    },function (){
        $scope.demoStyle();
        $rootScope.css = '.class' + $scope.demoStyle();
    }, true);
});