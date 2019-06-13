app.factory('service', ['$http', function ($http) {
    return {
        listar: function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/inmobiliaria',
                headers: { 'accept': 'application/json' }
            });
        }
    }
}]);