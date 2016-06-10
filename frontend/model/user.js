import Room from './room';

export default class {

	constructor({name, id, lastLocation, userAgent}){
		this.name = name;
		this.id = id;
		this.lastLocation = lastLocation;
		this.userAgent = userAgent;
		this.room = new Room('');
	}

	updateName(){
		console.log('Name updated');
	}

	book(){
		this.
	}
}