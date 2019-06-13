app.controller('mapController', ['$scope', '$compile', '$http', 'service', '$q', function ($scope, $compile, $http, $service, $q) {
    $scope.listaDatos = [];
    $scope.listaDatosFiltrados = [];
    $scope.listaTipo = [];
    $scope.tipoSeleccionado = {};
    $scope.ciudadSeleccionado = {};
    $scope.listaCiudad = [];

    $scope.getDatos = function () {
        $service.listar()
            .then(function successCallback(response) {
                $scope.listaDatos = response.data;
                $scope.listaDatosFiltrados = response.data;
                google.maps.event.addDomListener(window, 'load', initialize);
                initialize();
                $scope.cargarCiudad();
                $scope.cargarTipo();
                console.log("Success", response);
            }, function errorCallback(response) {
                console.log("Error en el listado de datos", response);
            });

    }
    $scope.funcionFiltro = function () {
        $scope.listaDatosFiltrados = [];
        let v = $scope.listaDatos;
        for (var i = 0; i < v.length; i++) {
            if ($scope.tipoSeleccionado.nombre == undefined && $scope.ciudadSeleccionado.nombre == undefined) {
                $scope.listaDatosFiltrados = $scope.listaDatos;
            } else if ($scope.tipoSeleccionado.nombre != undefined && v[i].tipo == $scope.tipoSeleccionado.nombre.nombre) {
                if ($scope.ciudadSeleccionado.nombre == undefined) {
                    $scope.listaDatosFiltrados.push(v[i])
                } else if (v[i].ciudad == $scope.ciudadSeleccionado.nombre.nombre) {
                    $scope.listaDatosFiltrados.push(v[i])
                }
            } else if ($scope.tipoSeleccionado.nombre == undefined && $scope.ciudadSeleccionado.nombre != undefined && v[i].ciudad == $scope.ciudadSeleccionado.nombre.nombre) {
                $scope.listaDatosFiltrados.push(v[i]);
            }
        }
        initialize();
    }

    $scope.cargarCiudad = function () {
        for (var i = 0; i < $scope.listaDatos.length; i++) {
            let obj = {
                id: $scope.listaDatos[i].id,
                nombre: $scope.listaDatos[i].ciudad
            }
            if ($scope.listaCiudad.length === 0) {
                $scope.listaCiudad.push(obj);
            } else {
                let cont = 0;
                $scope.listaCiudad.forEach(function (element) {
                    if (element.nombre == obj.nombre) {
                        cont++;
                    }
                });
                if (cont == 0) {
                    $scope.listaCiudad.push(obj);
                }
            }


        }
    }

    $scope.cargarTipo = function () {
        for (var i = 0; i < $scope.listaDatos.length; i++) {
            let obj = {
                id: $scope.listaDatos[i].id,
                nombre: $scope.listaDatos[i].tipo
            }
            if ($scope.listaTipo.length === 0) {
                $scope.listaTipo.push(obj);
            } else {
                let cont = 0;
                $scope.listaTipo.forEach(function (element) {
                    if (element.nombre == obj.nombre) {
                        cont++;
                    }
                });
                if (cont == 0) {
                    $scope.listaTipo.push(obj);
                }
            }


        }
    }

    function initialize() {

        $scope.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: { lat: -25.3357603, lng: -57.5219338 }
        });



        $scope.cities = [/*
            { title: 'Territorio Chop', lat: -25.3413052, lng: -57.5078329 },
            { title: 'Pinedo', lat: -25.3241453, lng: -57.522979 }*/
        ];

        for (var x = 0; x < $scope.listaDatosFiltrados.length; x++) {
            var marc = {
                title: $scope.listaDatosFiltrados[x].tipo,
                lat: $scope.listaDatosFiltrados[x].latitud,
                lng: $scope.listaDatosFiltrados[x].longitud,
                descripcion: $scope.listaDatosFiltrados[x].description,
                precio: $scope.listaDatosFiltrados[x].precio,
                contacto: $scope.listaDatosFiltrados[x].contacto,
                galeria: $scope.listaDatosFiltrados[x].galeria
            }
            $scope.cities.push(marc);
        }

        $scope.infowindow = new google.maps.InfoWindow({
            content: ''
        });


        for (var i = 0; i < $scope.cities.length; i++) {


            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($scope.cities[i].lat, $scope.cities[i].lng),
                map: $scope.map,
                title: $scope.cities[i].title
            });

            //var content = '<a ng-click="cityDetail(' + i + ')" class="btn btn-default">Ver detalles</a>';
            var content = `<div ><h4>` + $scope.cities[i].title + `</h4><p>` + $scope.cities[i].descripcion + `</p><p>Precio (Gs.):` + $scope.cities[i].precio + `</p><p>Contacto :` + $scope.cities[i].contacto + `</p><img class= "imagenes" ng-src=` + $scope.cities[i].galeria + `></div>`;
            var compiledContent = $compile(content)($scope)

            google.maps.event.addListener(marker, 'click', (function (marker, content, scope) {
                return function () {
                    scope.infowindow.setContent(content);
                    scope.infowindow.open(scope.map, marker);
                };
            })(marker, compiledContent[0], $scope));

        }

    }


    init = function () {
        $scope.getDatos();

    }
    init();


}]);