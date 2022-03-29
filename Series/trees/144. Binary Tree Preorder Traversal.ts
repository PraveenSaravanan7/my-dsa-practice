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

export function preorderTraversal(root: TreeNode | null): number[] {
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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) return;

    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };

  dfs(root);

  return res;
}

function inorderTraversalIterative(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];

  const stack = [];

  let cur: TreeNode | null = root;

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop() as TreeNode;
      res.push(cur.val);
      cur = cur.right;
    }
  }

  return res;
}

function inorderTraversalIterativeTwo(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];

  const stack = [root];

  let cur: TreeNode | null = root;

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      const cand = stack.pop() as TreeNode;
      res.push(cand.val);
      if (cand.right) cur = cand.right;
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

console.log(inorderTraversal(root));
console.log(inorderTraversalIterative(root));
console.log(inorderTraversalIterativeTwo(root));
