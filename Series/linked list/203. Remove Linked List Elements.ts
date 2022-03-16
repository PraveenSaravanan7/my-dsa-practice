export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(-1);
  dummy.next = head;

  let prev: ListNode | null = dummy;
  let current = dummy.next;

  while (current) {
    if (current.val === val) {
      if (prev) prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return dummy.next;
}

const myList = new ListNode(1);
myList.next = new ListNode(2);
myList.next.next = new ListNode(3);
myList.next.next.next = new ListNode(4);
myList.next.next.next.next = new ListNode(5);

console.log(myList);

removeElements(myList, 3);

console.log(myList);
