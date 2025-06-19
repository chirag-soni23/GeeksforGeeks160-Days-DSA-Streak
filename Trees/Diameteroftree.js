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

function diameterOfTree(root) {
  let max = { val: 0 };

  function dfs(node) {
    if (node === null) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    max.val = Math.max(max.val, left + right); 
    return Math.max(left, right) + 1;
  }

  dfs(root);
  return max.val;
}

let diameter = diameterOfTree(root);
console.log("Diameter of Tree =>", diameter);
