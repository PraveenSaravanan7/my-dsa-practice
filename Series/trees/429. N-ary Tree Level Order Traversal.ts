export class Node {
  val: number;
  children: Node[];

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function levelOrder(root: Node | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];

  const queue = [root];

  while (queue.length) {
    res.push(queue.map((node) => node.val));

    let len = queue.length;

    while (len--) {
      const cand = queue.shift();

      cand?.children.forEach((child) => queue.push(child));
    }
  }

  return res;
}
