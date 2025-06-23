class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    boundaryTraversal(root) {
        let ans = [];
        if (!root) return ans;

        if (!this.isLeaf(root)) ans.push(root.data);

        this.leftBoundary(root.left, ans);
        this.leafNodes(root, ans);
        this.rightBoundary(root.right, ans);

        return ans;
    }

    isLeaf(node) {
        return node && !node.left && !node.right;
    }

    leftBoundary(node, ans) {
        if (!node || this.isLeaf(node)) return;
        ans.push(node.data);
        if (node.left) this.leftBoundary(node.left, ans);
        else this.leftBoundary(node.right, ans);
    }

    rightBoundary(node, ans) {
        if (!node || this.isLeaf(node)) return;
        if (node.right) this.rightBoundary(node.right, ans);
        else this.rightBoundary(node.left, ans);
        ans.push(node.data); // Add after recursion for reverse order
    }

    leafNodes(node, ans) {
        if (!node) return;
        if (this.isLeaf(node)) {
            ans.push(node.data);
            return;
        }
        this.leafNodes(node.left, ans);
        this.leafNodes(node.right, ans);
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(7);
root.left.right.right = new Node(8);
root.right.right = new Node(6);
root.right.right.left = new Node(9);
root.right.right.right = new Node(10);

const solution = new Solution();
const result = solution.boundaryTraversal(root);
console.log("Boundary Traversal:", result); 