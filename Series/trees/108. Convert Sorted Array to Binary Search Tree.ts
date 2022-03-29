function sortedArrayToBST(
  nums: number[],
  left = 0,
  right = nums.length - 1
): TreeNode | null {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);

  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums, left, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, right);

  return root;
}
