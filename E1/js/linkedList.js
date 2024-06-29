// Call de files
const Node = require("./node");

//Create Class LinkedList
class LinkedList {
  constructor(head) {
    this.head = null;
  }

  // Methods

  // Add new value in LinkedList
  add(value) {
    const newNode = new Node(value, null); //Create initial node
    // If head is null then it will be the new value
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    // Search while current has value
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode; // add de new value
  }

  // Delete middle node method
  deleteMiddleNode() {
    if (!this.head || !this.head.next) {
      return; //If the list has 0 or 1 nodes, you cannot delete the middle node
    }

    let length = 1;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }

    let middleIndex = Math.floor(length / 2) - 1; // I divide the length by 2 and subtract 1 because the list starts at 0

    current = this.head;
    for (let i = 1; i < middleIndex; i++) {
      //Starts at 1
      current = current.next;
    }
    current.next = current.next.next; //current variable becomes the middle node
  }

  // Print List with all elements a -> b -> c...
  printList() {
    if (this.head === null) {
      console.log("Empty List"); //Print log when List is empty
    } else {
      let current = this.head;
      //while loop to print each element of the list
      while (current !== null) { 
        process.stdout.write(`${current.data} -> `);
        current = current.next;
      }
      console.log("");
    }
  }
}

module.exports = LinkedList;
