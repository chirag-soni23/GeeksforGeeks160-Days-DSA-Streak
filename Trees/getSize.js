var TreeNode = /** @class */ (function () {
    function TreeNode(v) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var i = 0;
function treeConstructor(arr) {
    if (arr[i] == -1) {
        i++;
        return null;
    }
    var nn = new TreeNode(arr[i]);
    i++;
    var leftChild = treeConstructor(arr);
    var rigthChild = treeConstructor(arr);
    nn.left = leftChild;
    nn.right = rigthChild;
    return nn;
}
var tree = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1, -1];
var root = treeConstructor(tree);
// get size
function getSize(node) {
    if (node == null)
        return 0;
    var leftSize = getSize(node.left);
    var rightSize = getSize(node.right);
    return leftSize + rightSize + 1;
}
// get max
function getMax(node) {
    if (node == null)
        return -Infinity;
    var leftMax = getMax(node.left);
    var rightMax = getMax(node.right);
    return Math.max(node.val, Math.max(leftMax, rightMax));
}
// get min
function getMin(node) {
    if (node == null)
        return Infinity;
    var leftMax = getMin(node.left);
    var rightMax = getMin(node.right);
    return Math.min(node.val, Math.min(leftMax, rightMax));
}
console.log(getSize(root));
console.log(getMax(root));
console.log(getMin(root));
