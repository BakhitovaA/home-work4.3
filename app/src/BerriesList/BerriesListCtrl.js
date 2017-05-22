'use strict';

pokemonApp.controller('BerriesListCtrl', function($scope, BerriesService) {

    PokemonsService.getBerries().then(function(response) {
        $scope.berries = response.data.results;
    });

});
