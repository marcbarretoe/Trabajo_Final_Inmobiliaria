
/*Esta app.config o esta configuracion es la que se encarga de la navegacion y los 
movimientos de los segmentos que vamos a crear para agregar en la pagina principal*/
app.config(function($routeProvider){
	/*Cuando estamos en la raiz de la pagina o la url no especifica nada hacemos...*/
	$routeProvider
	.when('/',{
		templateUrl: 'app/home/home.html',
		controller: 'homeCtrl'
	})
	.otherwise({ 
		/*Si la url es cualquier otra cosa entra en este bloque y lo redirige*/
		redirectTo: '/' });
});