function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    max = Math.max(left + right, max); // to understant, ignore this line

    return Math.max(left, right) + 1;
  };

  dfs(root);

  return max;
}
