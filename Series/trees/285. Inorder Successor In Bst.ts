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

export function inorderSuccessor(root: TreeNode, p: TreeNode): TreeNode | null {
  if (!root) return null;

  //p has right
  if (p.right) {
    let cur: TreeNode | null = p.right;
    let prev: TreeNode | null = null;

    while (cur) {
      prev = cur;
      cur = cur.left;
    }

    return prev;
  }

  let curr: TreeNode | null = root;
  let prev: TreeNode | null = null;

  while (curr && curr !== p) {
    if (p.val < curr.val) {
      prev = curr;
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }

  return prev;
}
