﻿
(function () {
    var lotrApi = function ($http) {

        var getBooks = function () {
            return $http.get("https://the-one-api.herokuapp.com/v1/book")
                .then(function (response) {
                    return response.data.docs;
                });
        };

        var getCharacters = function () {
            return $http({
                method: "GET",
                url: "https://the-one-api.herokuapp.com/v1/character",
                headers: { "Authorization": "Bearer U6nGivlOHF-lbiX0c2bA" }
            }).then(function (response) {
                return response.data.docs;
            });
        };

        return {
            getBooks: getBooks,
            getCharacters: getCharacters
        };
    };

    var app = angular.module('lotr');
    app.factory('lotrApi', lotrApi);
}());