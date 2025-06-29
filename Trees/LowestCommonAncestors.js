class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Solution class with LCA method
class Solution {
    LCA(root, n1, n2) {
        // base case
        if (root == null) return null;

        if (root.data === n1.data || root.data === n2.data) return root;

        let leftLCA = this.LCA(root.left, n1, n2);
        let rightLCA = this.LCA(root.right, n1, n2);

        if (leftLCA && rightLCA) return root;
        else if (leftLCA != null) return leftLCA;
        return rightLCA;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const sol = new Solution();

const n1 = new Node(4); 
const n2 = new Node(5);

const result = sol.LCA(root, root.left.left, root.left.right);

console.log("LCA:", result.data);  
