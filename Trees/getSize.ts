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

// get size
function getSize(node:TreeNode | null):number{
    if(node == null) return 0;
    
    let leftSize = getSize(node.left);
    let rightSize = getSize(node.right);

    return leftSize + rightSize + 1;
}

// get max
function getMax(node:TreeNode | null) : number{
    if(node == null) return -Infinity;

    let leftMax = getMax(node.left);
    let rightMax = getMax(node.right);

    return Math.max(node.val,Math.max(leftMax,rightMax));
}

// get min
function getMin(node:TreeNode | null) : number{
    if(node == null) return Infinity;

    let leftMax = getMin(node.left);
    let rightMax = getMin(node.right);

    return Math.min(node.val,Math.min(leftMax,rightMax));
}

console.log(getSize(root));
console.log(getMax(root));
console.log(getMin(root));