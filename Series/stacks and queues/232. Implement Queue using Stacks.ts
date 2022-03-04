interface myq {
  pushStack: number[];
  popStack: number[];
}

class MyQueue implements myq {
  pushStack: number[] = [];
  popStack: number[] = [];

  constructor() {}

  push(x: number): void {
    this.pushStack.push(x);
  }

  pop(): number {
    if (!this.popStack.length)
      while (this.pushStack.length)
        this.popStack.push(this.pushStack.pop() as number);

    return this.popStack.pop() as number;
  }

  peek(): number {
    if (!this.popStack.length)
      while (this.pushStack.length)
        this.popStack.push(this.pushStack.pop() as number);

    return this.popStack[this.popStack.length - 1];
  }

  empty(): boolean {
    return !this.popStack.length && !this.pushStack.length;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
