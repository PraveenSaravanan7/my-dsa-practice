export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let fast: ListNode | null = head;
  let slow = head;
  let pointer = head;

  while (fast && fast.next) {
    fast = fast.next?.next;
    slow = slow?.next as ListNode;
    if (slow === fast) break;
  }

  if (slow !== fast) return null;

  while (slow !== pointer && slow?.next && pointer?.next) {
    slow = slow.next;
    pointer = pointer.next;
  }

  return pointer;
}
