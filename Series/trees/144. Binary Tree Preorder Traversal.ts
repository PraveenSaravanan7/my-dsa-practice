function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];

  const stack = [root];

  while (stack.length) {
    const cand = stack.pop() as TreeNode;
    res.push(cand.val);

    if (cand.right) stack.push(cand.right);
    if (cand.left) stack.push(cand.left);
  }

  return res;
}
