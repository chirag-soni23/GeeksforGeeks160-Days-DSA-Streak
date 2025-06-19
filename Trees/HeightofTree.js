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

function heightOfTree(root) {
  if (root === null) return 0;

  let leftHeight = heightOfTree(root.left);
  let rightHeight = heightOfTree(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

let height = heightOfTree(root);
console.log("Height of Tree =>", height);
