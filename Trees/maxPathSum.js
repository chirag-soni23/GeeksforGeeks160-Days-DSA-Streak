class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    findMaxSum(root) {
        let maxSum = { val: -Infinity };
        this.solve(root, maxSum);
        return maxSum.val;
    }

    solve(root, maxSum) {
        if (root == null) return 0;

        let l = Math.max(0, this.solve(root.left, maxSum));
        let r = Math.max(0, this.solve(root.right, maxSum));

        let allBetter = l + r + root.data;
        maxSum.val = Math.max(maxSum.val, allBetter);

        return Math.max(l, r) + root.data;
    }
}

const root = new Node(10);
root.left = new Node(2);
root.right = new Node(10);
root.left.left = new Node(20);
root.left.right = new Node(1);
root.right.right = new Node(-25);
root.right.right.left = new Node(3);
root.right.right.right = new Node(4);

const sol = new Solution();
console.log("Maximum Path Sum:", sol.findMaxSum(root));
