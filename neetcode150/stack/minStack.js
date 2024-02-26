var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * Time O(1) | Space O(N)
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  // <= is used to make sure multiple min are accommodated
  if (this.minStack.length === 0 || val <= this.getMin())
    this.minStack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const top = this.stack.pop();

  if (top === this.getMin()) this.minStack.pop();

  return top;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.at(-1);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
