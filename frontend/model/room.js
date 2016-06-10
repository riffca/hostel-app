class Room {
	constructor({name, square, price, places}){
		this.name = name;
		this.square = square;
		this.price = price;
		this.places = places;
	}
	open(){
		alert('Room is opened!');
	}
	close(){
		alert('Room is closed');
	}
	reserve(){
		alert('Room is reserved');
	}
}


export default Room;