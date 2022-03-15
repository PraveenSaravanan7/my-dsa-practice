function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next?.next;
    slow = slow?.next as ListNode;
    if (slow === fast) return true;
  }

  return false;
}
