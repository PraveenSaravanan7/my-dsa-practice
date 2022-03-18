class MyNode {
  val?: number;
  next?: MyNode | null;

  constructor(val?: number, next?: MyNode | null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  head: MyNode | null;
  constructor() {
    this.head = null;
  }

  get(index: number): number {
    let cand = this.head;
    while (index--) cand = cand?.next || null;
    return cand?.val ?? -1;
  }

  addAtHead(val: number): void {
    const cand = new MyNode(val, this.head);
    this.head = cand;
  }

  addAtTail(val: number): void {
    if (this.head) {
      let tail = this.head;

      while (tail?.next) {
        tail = tail.next;
      }

      if (tail) tail.next = new MyNode(val);
    } else {
      this.head = new MyNode(val);
    }
  }

  addAtIndex(index: number, val: number): void {
    if (index === 0) {
      this.addAtHead(val);
    } else {
      let prev = this.head;
      while (--index) prev = prev?.next || null;
      const newNode = new MyNode(val);
      if (prev) {
        newNode.next = prev.next;
        prev.next = newNode;
      }
    }
  }

  deleteAtIndex(index: number): void {
    if (index === 0) {
      this.head = this.head?.next || null;
    } else {
      let cand = this.head;
      while (--index) cand = cand?.next || null;
      if (cand) cand.next = cand.next?.next || null;
    }
  }
}

const ll = new MyLinkedList();
ll.addAtHead(0);
ll.addAtIndex(1, 1);
ll.addAtHead(4);
ll.addAtHead(4);
console.log(ll.get(2))

console.log(JSON.stringify(ll));


// ["MyLinkedList","addAtHead","addAtIndex","get","addAtHead","get","addAtHead","get","get","addAtIndex","addAtTail","addAtHead"]
// [[],[0],[1,1],[2],[4],[2],[4],[2],[3],[1,6],[1],[0]]
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
