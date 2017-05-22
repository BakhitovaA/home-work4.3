angular
    .module('PokemonApp')
    .factory('BerriesService', function($http) {

    $http.defaults.headers.common = {
        "application-id": "11AF7AED-8800-15BD-FFAA-D9015E371500",
        "secret-key": "01AD8BC0-A437-AAB0-FF7F-6C32E4FBA700"
    };
            return {
                getBerries: function() {
                    return $http.get('https://api.backendless.com/v1/data/berries');
                }
            }

        }

    );
