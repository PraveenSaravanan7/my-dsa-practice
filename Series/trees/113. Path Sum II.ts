function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];

  const dfs = (node: TreeNode | null, sum: number, path: number[]) => {
    if (!node) return;

    if (node.left === null && node.right === null) {
      path.push(node.val);
      if (node.val === sum) res.push(path.slice());
      path.pop();
      return;
    }

    if (node.left) {
      path.push(node.val);
      dfs(node.left, sum - node.val, path);
      path.pop();
    }
    if (node.right) {
      path.push(node.val);
      dfs(node.right, sum - node.val, path);
      path.pop();
    }
  };

  dfs(root, targetSum, []);

  return res;
}
