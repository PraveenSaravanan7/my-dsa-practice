/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteNode(root: ListNode | null): void {
  if (root && root.next) {
    root.val = root.next.val;
    root.next = root.next.next;
  }
}

const myList = new ListNode(1);
myList.next = new ListNode(2);
myList.next.next = new ListNode(3);
myList.next.next.next = new ListNode(4);
myList.next.next.next.next = new ListNode(5);

console.log(myList);

deleteNode(myList.next.next);

console.log(myList);
