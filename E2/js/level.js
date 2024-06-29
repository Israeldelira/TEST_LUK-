const { Room, RoomType } = require("./room");

class Level {
  constructor(levelNumber, roomsByRow, rows) {
    //Atributtes of level
    this.levelNumber = levelNumber;
    this.roomsByRow = roomsByRow;
    this.rooms = [];

    // Loop for calculated rows
    for (let row = 0; row < rows; row++) {
      let rowRooms = [];
      // Loop for calculated rooms and assing the order for room type
      for (let room = 0; room < roomsByRow; room++) {
        let roomType = this.assignRoomType(room + 1); // room + 1 to starts at 1 and not at 0
        rowRooms.push(new Room(roomType, false)); // Todas las habitaciones se inicializan como disponibles
      }
      this.rooms.push(rowRooms);
    }
  }
  // ------------- Methods ------------------

  // Assing the order of type room
  assignRoomType(index) {
    if (index % 3 === 0) return RoomType.LARGE; // assing Large to 3 multiples
    if (index % 2 === 0) return RoomType.DOUBLE; // assing double to 2 multiples
    return RoomType.INDIVIDUAL; // The rest values
  }

  findAvailableRoom(type) {
    for (let row of this.rooms) {
      for (let room of row) {
        if (room.typeRoom === type && !room.occupiedRoom) {
          return room;
        }
      }
    }
    return null; // No available room of the specified type
  }

  //search for consecutive rooms for groups of more than 3 people
  findAndOccupyConsecutiveLargeRooms(count) {
    for (let row of this.rooms) {
      for (let i = 0; i <= row.length - count; i++) {
        //check if the 'count' rooms from index 'i' are all large, unoccupied rooms
        let canAccommodate = row
          .slice(i, i + count)
          //check if all the conditions are valid
          .every(
            (room) => room.typeRoom === RoomType.LARGE && !room.occupiedRoom
          );
        if (canAccommodate) {
          let roomsToOccupy = row.slice(i, i + count);
          roomsToOccupy.forEach((room) => room.occupy());
          return roomsToOccupy;
        }
      }
    }
    return null;
  }
}
module.exports = Level;
