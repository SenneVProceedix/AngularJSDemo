
(function () {

    var app = angular.module("lotr", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/book", {
                templateUrl: "book.html",
                controller: "BookController"
            })
            .when("/character", {
                templateUrl: "character.html",
                controller: "CharacterController"
            })
            .otherwise({ redirectTo: "/book" });
    });

}());




