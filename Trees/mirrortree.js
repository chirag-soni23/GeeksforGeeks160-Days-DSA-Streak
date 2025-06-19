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

function mirrorTree(node) {
  if (node === null) return;
  mirrorTree(node.left);
  mirrorTree(node.right);
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
}

function preorder(node) {
  if (node === null) return;
  process.stdout.write(node.val + " ");
  preorder(node.left);
  preorder(node.right);
}

mirrorTree(root);
console.log("Mirror Tree (Preorder):");
preorder(root);
