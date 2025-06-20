class Node {
    constructor(x) {
        this.key = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    buildTree(inorder, preorder) {
        let idx = [0]; 
        return this.solve(inorder, preorder, idx, 0, preorder.length - 1);
    }

    solve(inorder,preorder,idx,left,right){
        if(left > right) return null;
        let rootVal = preorder[idx[0]];
        idx[0]++;

        // new root
        let root = new Node(rootVal);
        let index = this.search(inorder,rootVal,left,right);

        root.left = this.solve(inorder,preorder,idx,left,index-1,);
        root.right = this.solve(inorder,preorder,idx,index+1,right);
        return root;
    }

    search(inorder,rootVal,left,right){
        for(let i = left;i<=right;i++){
            if(inorder[i] === rootVal) return i;
        }
        return -1;
    }

    
}

function postorderTraversal(root, result = []) {
    if (!root) return;
    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);
    result.push(root.key);
    return result;
}

const inorder = [3, 1, 4, 0, 2, 5];
const preorder = [0, 1, 3, 4, 2, 5];

const solution = new Solution();
const root = solution.buildTree(inorder, preorder);
const postorder = postorderTraversal(root);

console.log("Postorder Traversal:", postorder); 
