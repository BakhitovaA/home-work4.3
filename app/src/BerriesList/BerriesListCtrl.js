'use strict';

pokemonApp.controller('BerriesListCtrl', function($scope, BerriesService) {

    BerriesService.getBerries().then(function(response) {
        $scope.berries = response.data.results;
    });

});
