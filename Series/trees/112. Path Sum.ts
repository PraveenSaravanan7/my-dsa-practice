//Bottom - up
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const dfs = (node: TreeNode | null, sum: number): boolean => {
    if (!node) return false;

    if (node.left === null && node.right === null) return sum === node.val;

    return dfs(node.left, sum - node.val) || dfs(node.right, sum - node.val);
  };

  return dfs(root, targetSum);
}

// //Top - down
// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   if (!root) return false;

//   let hasPath = false;

//   const dfs = (node: TreeNode, sum: number) => {
//     if (node.left === null && node.right === null) {
//       if (sum === node.val) hasPath = true;
//       return;
//     }

//     if (node.left) dfs(node.left, sum - node.val);
//     if (node.right) dfs(node.right, sum - node.val);
//   };

//   dfs(root, targetSum);

//   return hasPath;
// }
