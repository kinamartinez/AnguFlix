/**
 * Created by karina on 03/03/17.
 */
"use strict";
app.controller("myCollectionCtrl", ["$scope", "allMovies", function ($scope, allMovies) {

    $scope.myCollection = allMovies.myCollection;

    $scope.trashClicked = allMovies.trashClicked;

    $scope.trashBtn = allMovies.trashBtn;

    $scope.removeMovie = allMovies.removeMovie;

    $scope.years = allMovies.years;

    $scope.yearArr = allMovies.yearArr;

    $scope.budget2 = allMovies.budget2;

    $scope.budgetUpdate = allMovies.budgetUpdate;

    $scope.test = allMovies.test;

    $scope.budget = allMovies.budget;
}]);




