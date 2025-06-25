class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  sumK(root, K) {
    const prefixSum = {};
    return this.countPath(root, K, 0, prefixSum);
  }

  countPath(node, k, currSum, prefixSum) {
    if (node === null) return 0;

    let count = 0;
    currSum += node.data;

    if (currSum === k) count++;
    count += prefixSum[currSum - k] || 0;

    prefixSum[currSum] = (prefixSum[currSum] || 0) + 1;

    count += this.countPath(node.left, k, currSum, prefixSum);
    count += this.countPath(node.right, k, currSum, prefixSum);

    prefixSum[currSum]--;
    return count;
  }
}

const root = new Node(1);
root.left = new Node(3);
root.right = new Node(-1);
root.left.left = new Node(2);
root.left.right = new Node(1);
root.right.left = new Node(4);
root.right.right = new Node(5);
root.left.right.left = new Node(1);

const sol = new Solution();
const K = 5;
const result = sol.sumK(root, K);

console.log(`Number of paths with sum ${K}:`, result);
