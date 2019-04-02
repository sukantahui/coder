var app = angular.module('myApp', []);

app.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '##'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
    };
});

app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

app.controller('javaCtrl', function($scope,$http) {
    $scope.tab=-1;
    $scope.setTab = function(newTab){
        $scope.tab = newTab;
    };
    $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
    };

    $http.get('employees.json').then(function (data){
        $scope.javaOverviews = data.data;
    });
});