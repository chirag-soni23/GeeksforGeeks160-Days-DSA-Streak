// bstTwoSum.js

class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  findTarget(root, target) {
    const ans = [];
    this.inOrder(root, ans);
    let l = 0,
      r = ans.length - 1;
    while (l < r) {
      const sum = ans[l] + ans[r];
      if (sum === target) return true;
      sum > target ? r-- : l++;
    }
    return false;
  }

  inOrder(root, ans) {
    if (!root) return;
    this.inOrder(root.left, ans);
    ans.push(root.data);
    this.inOrder(root.right, ans);
  }
}


const root = new Node(5);
root.left = new Node(3);
root.right = new Node(6);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.right = new Node(7);

const solution = new Solution();

const target = 9;
console.log("Target:", target, "| Pair Exists:", solution.findTarget(root, target)); 

const target2 = 28;
console.log("Target:", target2, "| Pair Exists:", solution.findTarget(root, target2)); 
