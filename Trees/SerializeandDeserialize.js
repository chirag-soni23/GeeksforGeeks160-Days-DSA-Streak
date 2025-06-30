class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  constructor() {
    this.i = 0;
  }

  serialize(root) {
    const ans = [];
    this.#preOrder(root, ans);
    return ans;
  }

  #preOrder(node, arr) {
    if (!node) {
      arr.push(-1);
      return;
    }
    arr.push(node.data);
    this.#preOrder(node.left, arr);
    this.#preOrder(node.right, arr);
  }

  deSerialize(arr) {
    const value = arr[this.i++];
    if (value === -1) return null;
    const node = new Node(value);
    node.left = this.deSerialize(arr);
    node.right = this.deSerialize(arr);
    return node;
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(60);

const sol = new Solution();
const arr = sol.serialize(root);
console.log('Serialized:', arr);

sol.i = 0;
const newRoot = sol.deSerialize(arr);
console.log('Deserialized tree:', JSON.stringify(newRoot, null, 2));
