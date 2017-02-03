export default class HomeController {

	constructor () {
		'ngInject';
		this.name = 'World';
	}

	changeName () {
		this.name = 'angular-tips';
	}

}