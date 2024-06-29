class Room {
  constructor(typeRoom, occupiedRoom) {
    //Atributes for room
    if (!Object.values(RoomType).includes(typeRoom)) {
      // Valid if the room type is correct
      throw new Error(`Invalid room type: ${typeRoom}`);
    }
    this.typeRoom = typeRoom;
    this.occupiedRoom = occupiedRoom;
  }

  //Methods
  //Disable room
  disableRoom() {
    this.occupiedRoom = true;
  }
  //Enable room
  enableRoom() {
    this.occupiedRoom = false;
  }

  //Assign a room depending on the number of people
  assignRoomByNumberPeople(numberPeople) {
    if (
      numberPeople === 1 ||
      (numberPeople === 2 &&
        (this.typeRoom === RoomType.DOUBLE || this.typeRoom === RoomType.LARGE))
    ) {
      // A single person or couple can be accommodated in any room
      return true;
    }
    return false; //A special room is required because there are more than 2 people.
  }
}

//Constant room types for better management of these values
const RoomType = {
  INDIVIDUAL: "individual",
  DOUBLE: "double",
  LARGE: "large",
};

module.exports = {
  Room,
  RoomType
};
