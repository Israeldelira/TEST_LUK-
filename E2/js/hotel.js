const Level = require("./level");
const { RoomType } = require("./room"); // Importar RoomType

class Hotel {
  constructor(levels, rowsPerLevel, roomsPerRow) {
    this.levels = [];
    for (let i = 0; i < levels; i++) {
      this.levels.push(new Level(i + 1, roomsPerRow, rowsPerLevel)); // Create levels
    }
  }

  accommodateSingle() {
    for (let level of this.levels) {
      let room = level.findAvailableRoom(RoomType.INDIVIDUAL); // Search avilable Room by room type for one person or couple
      if (room) {
        room.disableRoom();
        return room;
      }
    }
    return "Sorry but there are no rooms available"; // No individual room available
  }

  accommodateCouple() {
    for (let level of this.levels) {
      let room = level.findAvailableRoom(RoomType.DOUBLE);
      if (room) {
        room.disableRoom();
        return room;
      }

      room = level.findAvailableRoom(RoomType.LARGE);
      if (room) {
        room.disableRoom();
        return room;
      }
    }
    return "Sorry but there are no rooms available"; // No double or large room available
  }

  accommodateGroup(groupSize) {
    //Validation if there are less than 3 people
    if (groupSize < 3) {
      throw new Error(
        "Groups smaller than 3 should use the accommodateSingle or accommodateCouple method."
      );
    }
    for (let level of this.levels) {
      let rooms = level.findAndOccupyConsecutiveLargeRooms(3);
      if (rooms) {
        return rooms;
      }
    }
    return "Sorry but there are no consecutive rooms available"; // No set of 3 consecutive large rooms available
  }
}
module.exports = Hotel;
