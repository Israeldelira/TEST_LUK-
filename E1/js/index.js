const LinkedList = require("./linkedList");

const list = new LinkedList();

//Add the values of list
list.add("a");
list.add("b");
list.add("c");
list.add("d");
list.add("e");
list.add("f");

//print list before removing middle node
list.printList();

//remove middle node
list.deleteMiddleNode();

//Print list after remove middle node
list.printList();



