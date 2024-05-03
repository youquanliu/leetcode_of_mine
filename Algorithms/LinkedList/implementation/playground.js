class Node {}

class LinkedList {
  constructor() {}
  getSize() {}
  getFirst() {}
  getLast() {}
  clear() {}
  removeFirst() {}
  removeLast() {}

  insertFirst(data) {}
  insertLast(data) {}
  getAt(i) {}
  removeAt(i) {}
  insertAt(i, data) {}

  static get Node() {
    return Node;
  }
}

const list = new LinkedList();
list.insertFirst("3");
list.insertFirst("2");
list.insertFirst("1");

console.log(list);
console.log("getFirst: ", list.getFirst().data);
console.log("getLast: ", list.getLast().data);
console.log("insertLast: ", list.insertLast("last"));
console.log("getLast: ", list.getLast().data);

// console.log("getFirst: ", list.getFirst().data);
