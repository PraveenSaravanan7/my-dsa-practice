export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   let slow = head;
//   let fast = slow?.next;

//   while (slow) {
//     if (slow.val !== fast?.val) {
//       slow = slow.next;
//       fast = slow?.next;
//     } else {
//       slow.next = fast.next;
//       fast = slow.next;
//     }
//   }

//   return head;
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummmy = new ListNode(-Infinity, head);
  let curr = head;
  let prev = dummmy;

  while (curr) {
    if (curr.val === prev.val) {
      while (curr && curr.val === prev.val) {
        curr = curr?.next;
      }
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummmy.next;
}
