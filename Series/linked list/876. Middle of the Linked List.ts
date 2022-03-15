class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function middleNode(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next?.next;
    slow = slow?.next as ListNode;
  }

  return slow;
}
