angular.module('mapa', [])
    .controller('MapController', function ($scope, $rootScope, $compile) {


        function initialize() {

            $scope.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: -25.3357603, lng: -57.5219338 }
            });



            $scope.cities = [
                { title: 'Territorio Chop', lat: -25.3413052, lng: -57.5078329 },
                { title: 'Pinedo', lat: -25.3241453, lng: -57.522979 }
            ];


            $scope.infowindow = new google.maps.InfoWindow({
                content: ''
            });


            for (var i = 0; i < $scope.cities.length; i++) {


                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng($scope.cities[i].lat, $scope.cities[i].lng),
                    map: $scope.map,
                    title: $scope.cities[i].title
                });

                var content = '<a ng-click="cityDetail(' + i + ')" class="btn btn-default">Ver detalles</a>';
                var compiledContent = $compile(content)($scope)

                google.maps.event.addListener(marker, 'click', (function (marker, content, scope) {
                    return function () {
                        scope.infowindow.setContent(content);
                        scope.infowindow.open(scope.map, marker);
                    };
                })(marker, compiledContent[0], $scope));

            }

        }

        $scope.cityDetail = function (index) {
            alert(JSON.stringify($scope.cities[index]));
        }

        google.maps.event.addDomListener(window, 'load', initialize);

    });