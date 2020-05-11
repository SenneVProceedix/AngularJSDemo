
(function () {
    var app = angular.module("lotr");

    var DetailController = function ($scope, lotrApi, $routeParams) {

        var onCharacterComplete = function (data) {
            console.log(data);
            $scope.character = data;
        };

        lotrApi.getCharacter($routeParams.id).then(onCharacterComplete);
    };

    app.controller("DetailController", DetailController);

}());