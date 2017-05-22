'use strict';

pokemonApp.controller('EditPokemonCtrl', function($scope, $routeParams, PokemonsService) {

    $scope.pokemonLoaded = false;

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
        $scope.pokemonLoaded = true;
    });

    $scope.editPokemonDetail = function(myPokemon) {
        $scope.editSuccess = false;
        PokemonsService.editPokemonDetail(myPokemon).then(function(response) {
            $scope.editSuccess = true;
        });

    }

});