export default class Hostel {

    constructor({ name, rooms, staff, users }) {
        this.rooms = rooms;
        this.staff = staff;
        this.users = users;
        this.name = name;
    }

    showRooms() {
        console.log('Показаны все комнаты');
    }

    showFreeRooms(rooms) {
        let freeRooms = [];
        rooms.foreach((room) => {
            if (room.free) {
                freeRooms.push(room);
            }
        });
        console.log(freeRooms.length);
    }

    showRoomPrice(room) {
        console.log(this.rooms.indexOf(room));
    }

    addRoomToCard(room) {

    }
}
let users = [];

Vue.$http.get('/api/users/all').then(data => {
    data.foreach(user => {
        users.push(new User(user));
    });
});


let hostel = new Hostel({
    name: 'Pretty Hostel',
    rooms: [
        new Room({ name: 'Кухня' }),
        new Room({ name: 'Спальня' })
    ] 
});
