/**
 * Created by karina on 02/03/17.
 */
"use strict";

app.controller('allMoviesCtrl', ['$scope', "allMovies", function ($scope, allMovies) {
    $scope.movies = allMovies.movies;

    $scope.addToMyCollection = allMovies.addToMyCollection;

    $scope.alertuser = function (error) {
        if (error) {
            alert(error);
        }
        else console.log("movie added");
    };


}]);


