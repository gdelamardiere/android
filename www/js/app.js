document.addEventListener('deviceready',function(){
	//ici code au lancement de l'appli
},false);

var app=angular.module('app',[]);

app.config(function($routeProvider){
	$routeProvider
		.when('/home',{templateUrl:'partials/home.html'})
		.otherwhise({redirectTo:'/home'})
})