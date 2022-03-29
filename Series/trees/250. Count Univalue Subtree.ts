class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const univalueSubTrees = (root: TreeNode | null): number => {
  if (!root) return -1;

  let count = 0;

  const dfs = () => {};

  return count;
};
