class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    inOrder(root) {
        let ans = [];

        function dfs(root){
            if(root == null) return null;
            dfs(root.left);
            ans.push(root.data);
            dfs(root.right);
        }
        dfs(root)
        return ans;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

let solution = new Solution();
let result = solution.inOrder(root);

console.log("InOrder Traversal:", result); 
