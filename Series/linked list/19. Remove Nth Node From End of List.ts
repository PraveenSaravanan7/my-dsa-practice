export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head,
    slow = head;

  while (n--) {
    fast = fast?.next || null;
  }

  if (!fast) return slow?.next || null;

  while (fast.next) {
    fast = fast.next;
    slow = slow?.next || null;
  }

  if (slow) slow.next = slow?.next?.next || null;

  return head;
}
