class TrieNode {
  constructor() {
    this.left = null;
    this.right = null;
  }
}

class Solution {
  maxXOR(arr) {
    let root = new TrieNode();
    for (let num of arr) {
      this.insert(root, num);
    }
    let maxResult = 0;
    for (let num of arr) {
      let temp = this.findMaxXOR(root, num);
      maxResult = Math.max(temp, maxResult);
    }
    return maxResult;
  }
  insert(root, num) {
    let node = root;
    for (let i = 31; i >= 0; i--) {
      let bit = (num >> i) & 1;
      if (bit === 0) {
        if (!node.left) node.left = new TrieNode();
        node = node.left;
      } else {
        if (!node.right) node.right = new TrieNode();
        node = node.right;
      }
    }
  }
  findMaxXOR(root, num) {
    let maxXOR = 0;
    let node = root;
    for (let i = 31; i >= 0; i--) {
      let bit = (num >> i) & 1;
      if (bit === 1) {
        if (node.left !== null) {
          maxXOR += Math.pow(2, i);
          node = node.left;
        } else {
          node = node.right;
        }
      } else {
        if (node.right !== null) {
          maxXOR += Math.pow(2, i);
          node = node.right;
        } else {
          node = node.left;
        }
      }
    }
    return maxXOR;
  }
}

let arr = [25, 10, 2, 8, 5, 3];
let solution = new Solution();
console.log(solution.maxXOR(arr));
