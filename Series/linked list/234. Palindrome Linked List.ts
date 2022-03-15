export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseList = (head: ListNode | null) => {
  let current: ListNode | null = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

function isPalindrome(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;
  //   let mid = head;
  //   let midIdx = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next as ListNode;
  }

  let midHead = reverseList(slow);
  let startHead = head;

  while (midHead && startHead) {
    if (midHead.val !== startHead?.val) return false;

    midHead = midHead.next;
    startHead = startHead.next;
  }

  return true;
}
