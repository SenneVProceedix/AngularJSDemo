
(function () {
    var app = angular.module("lotr");

    var CharacterController = function ($scope, $anchorScroll, $location, lotrApi) {

        var onCharacterSearchComplete = function (data) {
            console.log(data);
            $scope.characters = data;
        };


        $scope.search = function () {
            console.log("search clicked");
            $location.hash("characterDetail");
            $anchorScroll();

        };
        lotrApi.getCharacters().then(onCharacterSearchComplete);

    };


    app.controller("CharacterController", CharacterController);

}());