var TreeNode = /** @class */ (function () {
  function TreeNode(v) {
    this.val = v;
    this.left = null;
    this.right = null;
  }
  return TreeNode;
})();

var i = 0;
function treeConstructor(arr) {
  if (arr[i] == -1) {
    i++;
    return null;
  }
  var nn = new TreeNode(arr[i]);
  i++;
  var leftChild = treeConstructor(arr);
  var rightChild = treeConstructor(arr);
  nn.left = leftChild;
  nn.right = rightChild;
  return nn;
}

var tree = [10, 20, 40, -1, -1, 50, -1, -1, 30, -1, -1];
var root = treeConstructor(tree);

function levelOrderTraversal(root) {
  if (root == null) return [];
  let result = [];
  let q = [];
  q.push(root);
  let currLevel = 0;

  while (q.length > 0) {
    let len = q.length;
    result.push([]);

    for (let i = 0; i < len; i++) {
      let node = q.shift();
      result[currLevel].push(node.val);
      if (node.left !== null) q.push(node.left);
      if (node.right !== null) q.push(node.right);
    }
    currLevel++;
  }
  return result;
}

let levelOrder = levelOrderTraversal(root);
console.log("Level Order Traversal => ", levelOrder);
