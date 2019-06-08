
var app = angular.module('ng-maps', ['ui.router', 'ngTable', 'ngStorage', 'ngBootbox', 'ngMaterial', 'ngMessages'])
    .config(function ($stateProvider, $httpProvider, $urlRouterProvider, $qProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                cache: false,
                templateUrl: 'app/login/view.html',
                controller: 'LoginCtrl',
                module: 'public'
            })
            .state('app', {
                url: '/app',
                cache: false,
                abstract: true,
                templateUrl: 'app/menu/menu.html',
                controller: 'MenuCtrl',
                module: 'private'
            })
            .state('app.inicio', {
                url: '/inicio',
                templateUrl: 'app/inicio/inicio.html',
                controller: 'InicioCtrl',
                module: 'private'
            })
            .state('app.consultas-ahorros', {
                url: '/consultas-ahorros',
                templateUrl: 'app/cajasAhorro/view.html',
                controller: 'CajaAhorroCtrl',
                module: 'private'
            })
            .state('app.extracto-ahorros', {
                url: '/extracto-ahorros',
                cache: false,
                templateUrl: 'app/cajasAhorroExtracto/view.html',
                controller: 'CajaAhorroExtractoCtrl',
                module: 'private'
            })
            .state('app.transferencias', {
                url: '/transferencias',
                cache: false,
                templateUrl: 'app/transferencias/view.html',
                controller: 'TransferenciaCtrl',
                module: 'private'
            })
            .state('app.transferencias-comprobante', {
                url: '/transferencias-comprobante',
                cache: false,
                templateUrl: 'app/transferencias/comprobante.html',
                controller: 'ComprobanteTransferenciaCtrl',
                module: 'private'
            })
            .state('app.pagos-comprobante', {
                url: '/pagos-comprobante',
                cache: false,
                templateUrl: 'app/pagos/comprobante.html',
                controller: 'ComprobantePagoCtrl',
                module: 'private'
            })
            .state('app.pagos-aportes', {
                url: '/pagos-aportes',
                cache: false,
                templateUrl: 'app/aportesPago/view.html',
                controller: 'AportePagoCtrl',
                module: 'private'
            })
            .state('app.pagos-solidaridad', {
                url: '/pagos-solidaridad',
                cache: false,
                templateUrl: 'app/solidaridadPago/view.html',
                controller: 'SolidaridadPagoCtrl',
                module: 'private'
            })
            .state('app.pagos-eventos', {
                url: '/pagos-eventos',
                cache: false,
                templateUrl: 'app/eventosPago/view.html',
                controller: 'EventoPagoCtrl',
                module: 'private'
            })
            .state('app.pagos-ahorroProgramado', {
                url: '/pagos-ahorroProgramado',
                cache: false,
                templateUrl: 'app/ahorroProgramadoPago/view.html',
                controller: 'AhorroProgPagoCtrl',
                module: 'private'
            })
            .state('app.pagos-prestamos', {
                url: '/pagos-prestamos',
                cache: false,
                templateUrl: 'app/prestamosPago/view.html',
                controller: 'PrestamoPagoCtrl',
                module: 'private'
            })
            .state('app.pagos-tarjetas', {
                url: '/pagos-tarjetas',
                cache: false,
                templateUrl: 'app/tarjetasPago/view.html',
                controller: 'TarjetaPagoCtrl',
                module: 'private'
            })
            .state('app.pagos-sps', {
                url: '/pagos-sps',
                cache: false,
                templateUrl: 'app/spsPago/view.html',
                controller: 'SpsPagoCtrl',
                module: 'private'
            })
            .state('app.pagos-servicios', {
                url: '/pagos-servicios',
                cache: false,
                templateUrl: 'app/pagoServicios/view.html',
                controller: 'ServicioPagoCtrl',
                module: 'private'
            })
            .state('app.servicios', {
                url: '/pagos-servicios',
                cache: false,
                templateUrl: 'app/pagoServicios/pago.html',
                controller: 'ServicioPagoCtrl',
                module: 'private'
            })
            .state('app.pagos-ahorroPlanificado', {
                url: '/pagos-ahorroPlanificado',
                cache: false,
                templateUrl: 'app/ahorroPlanificadoPago/view.html',
                controller: 'AhorroPlanifPagoCtrl',
                module: 'private'
            })
            .state('app.facturas', {
                url: '/facturas',
                cache: false,
                templateUrl: 'app/aportes/view.html',
                controller: 'MenuCtrl',
                module: 'private'
            })
            .state('app.comprobantes', {
                url: '/comprobantes',
                cache: false,
                templateUrl: 'app/comprobante/view.html',
                controller: 'ComprobanteCtrl',
                module: 'private'
            })
            .state('app.consultas-ahorroPlanificado', {
                url: '/consultas-ahorroPlanificado',
                templateUrl: 'app/ahorroPlanificado/view.html',
                controller: 'AhorroPlanificadoCtrl',
                module: 'private'
            })
            .state('app.detalle-ahorroPlanificado', {
                url: '/detalle-ahorroPlanificado',
                templateUrl: 'app/ahorroPlanificadoDetalle/view.html',
                controller: 'AhorroPlanificadoDetalleCtrl',
                module: 'private'
            })
            .state('app.extracto-ahorroPlanificado', {
                url: '/extracto-ahorroPlanificado',
                templateUrl: 'app/ahorroPlanificadoExtracto/view.html',
                controller: 'AhorroPlanificadoExtractoCtrl',
                module: 'private'
            })
            .state('app.consultas-ahorroProgramado', {
                url: '/consultas-ahorroProgramado',
                templateUrl: 'app/ahorroProgramado/view.html',
                controller: 'AhorroProgramadoCtrl',
                module: 'private'
            })
            .state('app.detalle-ahorroProgramado', {
                url: '/detalle-ahorroProgramado',
                templateUrl: 'app/ahorroProgramadoDetalle/view.html',
                controller: 'AhorroProgramadoDetalleCtrl',
                module: 'private'
            })
            .state('app.extracto-ahorroProgramado', {
                url: '/extracto-ahorroProgramado',
                templateUrl: 'app/ahorroProgramadoExtracto/view.html',
                controller: 'AhorroProgramadoExtractoCtrl',
                module: 'private'
            })
            .state('app.consultas-prestamos', {
                url: '/consultas-prestamos',
                templateUrl: 'app/prestamos/view.html',
                controller: 'PrestamoCtrl',
                module: 'private'
            })
            .state('app.detalles-prestamos', {
                url: '/detalles-prestamos',
                templateUrl: 'app/prestamosDetalle/view.html',
                controller: 'PrestamosDetalleCtrl',
                module: 'private'
            })
            .state('app.extracto-prestamos', {
                url: '/extracto-prestamos',
                templateUrl: 'app/prestamosExtracto/view.html',
                controller: 'PrestamosExtractoCtrl',
                module: 'private'
            })
            .state('app.consultas-seguro', {
                url: '/consultas-seguro',
                templateUrl: 'app/sps/view.html',
                controller: 'SeguroCtrl',
                module: 'private'
            })
            .state('app.detalles-seguro', {
                url: '/detalles-seguro',
                templateUrl: 'app/spsDetalle/view.html',
                controller: 'SeguroDetalleCtrl',
                module: 'private'
            })
            .state('app.extracto-seguro', {
                url: '/extracto-seguro',
                templateUrl: 'app/spsExtracto/view.html',
                controller: 'SeguroExtractoCtrl',
                module: 'private'
            })
            .state('app.consultas-aporte', {
                url: '/consultas-aporte',
                templateUrl: 'app/aportes/view.html',
                controller: 'AporteCtrl',
                module: 'private'
            })
            .state('app.consultas-tarjetas', {
                url: '/consultas-tarjetas',
                templateUrl: 'app/tarjetas/view.html',
                controller: 'TarjetaCtrl',
                module: 'private'
            })
            .state('app.extracto-tarjetas', {
                url: '/extracto-tarjetas',
                templateUrl: 'app/tarjetasExtracto/view.html',
                controller: 'TarjetaExtractoCtrl',
                module: 'private'
            })
            .state('app.extracto-aporte', {
                url: '/extracto-aporte',
                templateUrl: 'app/aportesExtracto/view.html',
                controller: 'AporteExtractoCtrl',
                module: 'private'
            })
            .state('app.consultas-solidaridad', {
                url: '/consultas-solidaridad',
                templateUrl: 'app/solidaridad/view.html',
                controller: 'SolidaridadCtrl',
                module: 'private'
            })
            .state('app.extracto-solidaridad', {
                url: '/extracto-solidaridad',
                templateUrl: 'app/solidaridadExtracto/view.html',
                controller: 'SolidaridadExtractoCtrl',
                module: 'private'
            })
            .state('app.irp', {
                url: '/irp',
                cache: false,
                templateUrl: 'app/irp/view.html',
                controller: 'IRPCtrl',
                module: 'private'
            })
            .state('app.agenda', {
                url: '/agenda',
                cache: false,
                templateUrl: 'app/agenda/view.html',
                controller: 'AgendaCtrl',
                module: 'private'
            })
            .state('app.agregar', {
                url: '/agregar',
                cache: false,
                templateUrl: 'app/agenda/agregar/view.html',
                controller: 'AgregarCtrl',
                module: 'private'
            })
            .state('app.modificar', {
                url: '/modificar',
                cache: false,
                templateUrl: 'app/agenda/modificar/view.html',
                controller: 'ModificarCtrl',
                module: 'private'
            })
            .state('app.cambiarPass', {
                url: '/cambiarPass',
                cache: false,
                templateUrl: 'app/cambiarContraseña/view.html',
                controller: 'CambiarPassCtrl',
                module: 'private'
            })
            .state('app.listar-comprobante', {
                url: '/listar-comprobante',
                cache: false,
                templateUrl: 'app/comprobante/comprobante.html',
                controller: 'ListarComprobanteCtrl',
                module: 'private'
            })
            .state('app.listaFacturas', {
                url: '/listar-factura',
                cache: false,
                templateUrl: 'app/pagoServicios/factura.html',
                controller: 'ListaFacturaCtrl',
                module: 'private'
            })
            .state('app.confirmacion-pago', {
                url: '/confirmar-pago',
                cache: false,
                templateUrl: 'app/pagoServicios/confirmacionPago.html',
                controller: 'ConfirmacionPagoCtrl',
                module: 'private'
            })
            .state('app.comprobante-pago-factura', {
                url: '/comprobante-pago-factura',
                cache: false,
                templateUrl: 'app/pagoServicios/comprobante.html',
                controller: 'ComprobantePagoFacturaCtrl',
                module: 'private'
            })
            
            .state('app.listar-datos', {
                url: '/lista-datos',
                cache: false,
                templateUrl: 'app/actualizacionDatos/listar.html',
                controller: 'ListarDatosCtrl',
                module: 'private'
            })
            .state('app.modificar-correo', {
                url: '/modificar-correo',
                cache: false,
                templateUrl: 'app/actualizacionDatos/modificar/correo.html',
                controller: 'CambiarCorreoCtrl',
                module: 'private'
            })
            .state('app.modificar-telefono', {
                url: '/modificar-telefono',
                cache: false,
                templateUrl: 'app/actualizacionDatos/modificar/telefono.html',
                controller: 'CambiarTelefonoCtrl',
                module: 'private'
            })
            ;

        $urlRouterProvider.otherwise('/login');
        $qProvider.errorOnUnhandledRejections(false);


        //            var sessionInterceptor = ['$location', '$rootScope', '$injector', function ($location, $rootScope, $injector) {
        //                    return {
        //                        'response': function (resp) {
        //                            $rootScope.valor = $location.path();
        //                            if (resp.status == 401) {
        //                                $.ajax({
        //                                    type: 'POST',
        //                                    url: contexto + '/rest/sesion/cerrar',
        //                                    success: function (data) {
        //                                        console.log(data);
        //                                        window.location.href = '#login';
        //                                        window.location.reload();
        //                                    }
        //                                });
        //                            }
        //                            ;
        //                            return resp;
        //                        },
        //                        'responseError': function (resp) {
        //                            if (resp.status == 401) {
        //                                $.ajax({
        //                                    type: 'POST',
        //                                    url: contexto + '/rest/sesion/cerrar',
        //                                    success: function (data) {
        //                                        console.log(data);
        //                                        window.location.href = '#login';
        //                                        window.location.reload();
        //                                    }
        //                                });
        //                            }
        //                            ;
        //                            return resp;
        //                        }
        //                    };
        //                }];
        //
        //            $httpProvider.interceptors.push(sessionInterceptor);

    });

