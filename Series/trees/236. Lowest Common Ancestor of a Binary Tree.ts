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

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;

  console.log(root.val);

  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left || right;
}

export function lowestCommonAncestorTwo(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;

  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left || right;
}

export function lowestCommonAncestorT(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const dfs = (node: TreeNode | null): TreeNode | null => {
    if (!root) return null;

    if (node === p || node === q) return node;

    const left = dfs(node?.left || null);
    const right = dfs(node?.right || null);

    if (left && right) return node;

    return left || right;
  };

  return dfs(root);
}

export function lowestCommonAncestorIt(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let res: TreeNode | null = null;

  const stack = [root];

  let left: TreeNode | null = null;
  let right: TreeNode | null = null;

  while (stack.length) {
    const cand = stack.pop();

    if (cand === p || cand === q) {
      left = cand;
      continue;
    }
  }

  return res;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
// root.right = null;

console.log(lowestCommonAncestor(root, root.left.left, root.left.right)?.val);

console.log(
  lowestCommonAncestorTwo(root, root.left.left, root.left.right)?.val
);
console.log(lowestCommonAncestorT(root, root.left, root.right)?.val);
