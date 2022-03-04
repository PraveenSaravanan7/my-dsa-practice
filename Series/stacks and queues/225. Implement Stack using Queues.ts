class myNode {
  val: number;
  next: myNode | null;

  constructor(x: number) {
    this.val = x;
    this.next = null;
  }
}

export class MyQueue {
  head: myNode | null;
  tail: myNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val: number) {
    const newNode = new myNode(val);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.size) return null;

    const out = this.head;
    if (this.head) this.head = this.head.next;
    if (out) out.next = null;
    this.size--;

    return out?.val;
  }

  peek() {
    return this.head?.val;
  }

  empty() {
    return !this.size;
  }
}

class MyStack {
  qqueue: MyQueue;
  constructor() {
    this.qqueue = new MyQueue();
  }

  push(x: number) {
    let rotate = this.qqueue.size;

    this.qqueue.enqueue(x);

    while (rotate) {
      this.qqueue.enqueue(this.qqueue.dequeue() as number);
      rotate--;
    }
  }

  pop() {
    return this.qqueue.dequeue();
  }

  top() {
    return this.qqueue.peek();
  }

  empty() {
    return this.qqueue.empty();
  }
}
