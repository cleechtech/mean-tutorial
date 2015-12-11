
var app = angular.module('myapp', [
	'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/main.html'
		})
		.state('register', {
			url: '/register',
			templateUrl: 'templates/register.html'
		});

	$urlRouterProvider.otherwise("/");
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});