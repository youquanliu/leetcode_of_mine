class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children.filter((el) => el.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  reaverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }
}
