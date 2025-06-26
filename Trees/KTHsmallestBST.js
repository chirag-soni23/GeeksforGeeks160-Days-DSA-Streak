class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  kthSmallest(root, k) {
    let count = 0;
    function dfs(node) {
      if (!node) return -1;
      const left = dfs(node.left);
      if (left !== -1) return left;

      count++;
      if (count === k) return node.data;

      const right = dfs(node.right);
      if (right !== -1) return right;
      return -1;
    }
    return dfs(root);
  }
}

// --- Demo -----------------------------
function buildDemoTree() {
  const root = new Node(20);
  root.left = new Node(8);
  root.right = new Node(22);
  root.left.left = new Node(4);
  root.left.right = new Node(12);
  root.left.right.left = new Node(10);
  root.left.right.right = new Node(14);
  return root;
}

const root = buildDemoTree();
const sol = new Solution();
const k = 5;
console.log(sol.kthSmallest(root, k)); 
