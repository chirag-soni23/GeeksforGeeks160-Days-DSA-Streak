class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  isBST(root) {
    return this.isValid(root, -Infinity, Infinity);
  }

  isValid(root, min, max) {
    if (root === null) return true;
    if (root.data <= min || root.data >= max) return false;

    return (
      this.isValid(root.left, min, root.data) &&
      this.isValid(root.right, root.data, max)
    );
  }
}

const root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);
root.right.right = new Node(5);

const sol = new Solution();
console.log("Is BST?", sol.isBST(root)); 
