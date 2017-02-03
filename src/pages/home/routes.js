import HomeController from './HomeController.js';

export default function routes ($stateProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		template: require('./view.html'),
		controller: HomeController,
		controllerAs: '$ctrl'
	});
}