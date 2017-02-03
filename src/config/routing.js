/** Copyright 2017 Jaakko-Heikki Heusala <jheusala@iki.fi> */
export default function routing ($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}
