
(function () {
    var app = angular.module("lotr");

    var BookController = function ($scope, $interval, lotrApi) {

        var onBookComplete = function (data) {
            $scope.books = data;
        };
        $scope.counter = 0;
        var increaseCounter = function () {
            $scope.counter += 1;
        };

        lotrApi.getBooks()
            .then(onBookComplete);
        $interval(increaseCounter, 1000);
    };

    app.controller("BookController", BookController);

}());