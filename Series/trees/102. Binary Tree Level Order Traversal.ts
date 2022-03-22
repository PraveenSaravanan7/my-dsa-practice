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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res: number[][] = [];

  const queue = [root];

  while (queue.length) {
    res.push(queue.map((node) => node.val));

    let len = queue.length;

    while (len--) {
      const cand = queue.shift();

      if (cand?.left) queue.push(cand.left);
      if (cand?.right) queue.push(cand.right);
    }
  }

  return res;
}

//     function levelOrder(root: TreeNode | null): number[][] {
//   if (!root) return [];

//   const res = [];
//   const queue = [root];

//   while (queue.length) {
//     res.push(queue.map((node) => node.val));

//     let len = queue.length;
//     while (len--) {
//       const candidate = queue.shift();
//       if (candidate?.left) queue.push(candidate.left);
//       if (candidate?.right) queue.push(candidate.right);
//     }
//   }

//   return res;
// }
