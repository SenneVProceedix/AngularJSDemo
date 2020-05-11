
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
            .when("/character/:id", {
                templateUrl: "detail.html",
                controller: "DetailController"
            })
            .otherwise({ redirectTo: "/book" });
    });

}());




