// export class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   let slow = head;
//   let fast = head?.next;

//   const dummy = new ListNode(-Infinity);
//   let tail: ListNode | null = dummy;

//   while (slow) {
//     if (slow.val !== fast?.val) {
//       console.log(slow.val);
//       tail.next = new ListNode(slow.val);
//       tail = tail?.next;
//     } else {
//       while (slow?.val === fast?.val) {
//         slow = slow?.next || null;
//         fast = slow?.next;
//       }
//     }

//     slow = slow?.next || null;
//     fast = slow?.next;
//   }

//   return dummy.next;
// }
// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   if (!head) return null;

//   let dummmy = new ListNode(-Infinity, head);
//   let curr: ListNode | null = head;
//   let prev = dummmy;
//   let next = curr.next;

//   while (curr) {
//     if (curr && next && curr.val === next.val) {
//       while (next && curr.val === next.val) {
//         next = next.next;
//       }

//       prev.next = next;
//       curr = next;
//       next = next?.next || null;
//     } else {
//       prev = curr;
//       curr = next;
//       next = next?.next || null;
//     }
//   }

//   return dummmy.next;
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-Infinity, head);
  let prev: ListNode | null = dummy;
  let curr = head;
  let next = curr?.next;

  while (next) {
    if (curr?.val === next.val) {
      while (curr?.val === next?.val) next = next?.next;
      if (prev) prev.next = next;
      curr = next;
      next = next?.next;
    } else {
      prev = curr;
      curr = next;
      next = next.next;
    }
  }

  return dummy.next;
}
