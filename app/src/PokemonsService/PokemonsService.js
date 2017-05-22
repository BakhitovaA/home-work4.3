angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

    $http.defaults.headers.common = {
        "application-id": "11AF7AED-8800-15BD-FFAA-D9015E371500",
        "secret-key": "01AD8BC0-A437-AAB0-FF7F-6C32E4FBA700"
    };
            return {

                getPokemons: function() {
                    return $http.get('https://api.backendless.com/v1/data/pokemons');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('https://api.backendless.com/v1/data/pokemons' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemons',
                        data: pokemonData
                    });
                },
				
				//Сделать запрос PUT при клике на кнопку «Сохранить»
				editPokemonDetail: function(pokemonData) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemons' + pokemonId,
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemons' + pokemonId
                    });
                }

            }

        }

    );