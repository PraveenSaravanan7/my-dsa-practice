function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res: number[][] = [];

  const queue = [root];

  let dir = 1;

  while (queue.length) {
    if (dir === 1) {
      res.push(queue.map((node) => node.val));
    } else {
      res.push(queue.map((node) => node.val).reverse());
    }

    let len = queue.length;

    while (len--) {
      const cand = queue.shift();
      if (cand?.left) queue.push(cand.left);
      if (cand?.right) queue.push(cand.right);
    }

    dir *= -1;
  }

  return res;
}
