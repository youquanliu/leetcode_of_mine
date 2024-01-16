// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;

    // this.insetAt(data, 0)
  }
  size() {
    //find the null
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    return this.head;
    //return this.getAt(0);
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (node.next == null) {
        return node;
      }
      node = node.next;
    }
    //return getAt(this.size()-1);
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    let lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data, null);
    } else {
      this.head = lastNode;
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const found = this.getAt(index) || null;

    if (found) {
      let previous = this.getAt(index - 1);
      previous.next = found.next;
    } else return null;
  }

  insertAt(data, index) {
    //empty
    if (!this.head) {
      this.head = new Node(data, null);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    //handle out of bounds : "|| this.getLast();"
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, this.previous.next);
    previous.next = node;
  }
}

const list = new List();
list.insertFirst("3");
list.insertFirst("2");
list.insertFirst("1");
list.insertAt("Hi", 1);
list.getAt(1); // returns node with data 'Hi'

// insetFirst(data) => insertAt(data,0)
// insertLast(data) => insetAt(data,this.size()-1)
// removeFirst() => removeAt(0)
// removeLast() => removeAt(this.size()-1)
// getFirst() => getAt(0)
// getLast() => getAt(this.size()-1)
// This means, all left side methods could be replaced by three methods
// insetAt, size() and getAt, removeAt

module.exports = { Node, LinkedList };
