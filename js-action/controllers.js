/**
 * Created by littlekeng on 16/7/2.
 */
//控制器定义
actionApp.controller('View1Controller', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $scope.$on('viewContentLoaded', function () {
        alert('页面加载完成');
    });

    $scope.search = function () {
        personName = $scope.personName;
        $http.get('http://localhost:8080/getperson', {
            params: {personName: personname}
        }).success(function (data) {
            $scope.person = data;
        })
    };
}]);