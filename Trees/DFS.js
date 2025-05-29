// DFS => Depth first search 
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
var preOrder = [];
var inOrder = [];
var postOrder = [];
function dfs(node) {
    if (node == null)
        return;
    preOrder.push(node.val);
    dfs(node.left);
    inOrder.push(node.val);
    dfs(node.right);
    postOrder.push(node.val);
}
dfs(root);
console.log("Pre Order => ".concat(preOrder));
console.log("In Order => ".concat(inOrder));
console.log("Post Order => ".concat(postOrder));
