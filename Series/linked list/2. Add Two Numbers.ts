export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const head = new ListNode(0);
  let tail = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    let currentSum = carry + (l1?.val || 0) + (l2?.val || 0);

    tail.next = new ListNode(currentSum % 10);
    carry = Math.floor(currentSum / 10);
    tail = tail.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return head.next;
}
