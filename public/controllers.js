/**
 * Created by karina on 02/03/17.
 */
"use strict";

app.controller('allMoviesCtrl', ['$scope', "allMovies", "$http", function ($scope, allMovies, $http) {
    $scope.movies = allMovies.movies;

    $scope.pelicula = allMovies.pelicula

    $scope.addToMyCollection = allMovies.addToMyCollection;

    $scope.alertuser = function (error) {
        if (error) {
            alert(error);
        }
        else console.log("movie added");
    };
    $scope.searchAll = "";

    $scope.clearSearch = function () {
        $scope.searchAll = "";
    };

    $scope.search = function () {
        $http.get('http://www.omdbapi.com/?s=' + $scope.film).then(function (data) {
            $scope.pelicula = data.data.Search;
            console.log($scope.pelicula)
        })
    }

}]);


