const Hotel = require('./hotel');

// 3 Levels
// 2 rows for level
// 5 rooms for row
let myHotel = new Hotel(1, 1, 50);

//Test
console.log("Room for one person");
console.log(myHotel.accommodateSingle());

console.log("Room for a couple:");
console.log(myHotel.accommodateCouple());

console.log("Room for group of 3 people:");
console.log(myHotel.accommodateGroup(3));