const LinkedList = require("../implementation/index");

// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const list = new LinkedList();
list.insertFirst("e");
list.insertFirst("d");
list.insertFirst("c");
list.insertFirst("b");
list.insertFirst("a");

var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
};

function fromLast(list, n) {
  let fast = list.head;
  let slow = list.head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return list;
}

fromLast(list, 2).data;
console.log("fromLast(list, 2).data: ", fromLast(list, 2).data);

console.log(list.getFirst());
console.log(list.getLast());
//n = 2

// [a,b,c,d,e]
