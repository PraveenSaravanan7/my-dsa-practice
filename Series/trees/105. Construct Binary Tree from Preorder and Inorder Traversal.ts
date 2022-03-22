function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;

  const root = new TreeNode(preorder[0]);

  const midIdx = inorder.indexOf(root.val);

  root.left = buildTree(
    preorder.slice(1, midIdx + 1), // midIdx + 1 is len
    inorder.slice(0, midIdx)
  );

  root.right = buildTree(
    preorder.slice(midIdx + 1), // midIdx + 1 is len
    inorder.slice(midIdx + 1)
  );

  return root;
}
