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

export function insertIntoBST(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  const newNode = new TreeNode(val);

  if (!root) return newNode;

  let curr: TreeNode | null = root;
  let prev: TreeNode | null = null;

  while (curr) {
    if (val > curr.val) {
      prev = curr;
      curr = curr.right;
    } else {
      prev = curr;
      curr = curr.left;
    }
  }

  if (prev && val < prev.val) prev.left = newNode;
  if (prev && val > prev.val) prev.right = newNode;

  return root;
}
