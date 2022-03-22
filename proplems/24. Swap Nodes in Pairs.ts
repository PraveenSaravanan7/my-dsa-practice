// export class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1);
  dummy.next = head;
  let prev: ListNode | null = dummy;
  let first = prev.next;
  let second = first?.next;

  while (prev && first && second) {
    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = prev.next.next;
    first = prev?.next || null;
    second = first?.next;
  }

  return dummy.next;
}

function swapPairsTwo(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, head);

  let curr: ListNode | null = dummy;

  while (curr && curr.next && curr.next.next) {
    let first: ListNode | null = curr.next;
    let second: ListNode | null = curr.next.next;

    first.next = second.next;
    second.next = first;
    curr.next = second;

    curr = curr.next.next;
  }

  return dummy.next;
}
