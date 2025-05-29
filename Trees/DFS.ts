// DFS => Depth first search 
class TreeNode{
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;

    constructor(v:number) {
        this.val = v;
        this.left = null;
        this.right = null;        
    }

}

let i = 0;
function treeConstructor(arr:number[]):TreeNode | null{
    if(arr[i] == -1){
        i++;
        return null;
    }

    let nn = new TreeNode(arr[i]);
    i++;
    let leftChild = treeConstructor(arr);
    let rigthChild = treeConstructor(arr);
    nn.left = leftChild;
    nn.right = rigthChild;
    return nn;
}

let tree = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1, -1];
let root = treeConstructor(tree);

let preOrder:number[] = [];
let inOrder:number[] = [];
let postOrder:number[] = [];

function dfs(node:TreeNode | null):void{
    if(node == null) return;

    preOrder.push(node.val);
    dfs(node.left);
    inOrder.push(node.val);
    dfs(node.right);
    postOrder.push(node.val);
}

dfs(root);

console.log(`Pre Order => ${preOrder}`);
console.log(`In Order => ${inOrder}`);
console.log(`Post Order => ${postOrder}`);