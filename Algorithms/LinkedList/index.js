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
    //or this.head = new Node(data, this.head);
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
    const newNode = new Node(data, null);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let node = this.head;
    while (node) {
      if (node.next == null) {
        node.next = newNode;
        return;
      }
      node = node.next;
    }
  }
}

const list = new LinkedList();
list.insertFirst("a");
list.insertFirst("b");
list.insertLast("c");
console.log(list);
console.log(list.getLast()); // returns node with data 'C'
module.exports = { Node, LinkedList };
