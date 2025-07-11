class Solution {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // Push element x into the stack
    push(x) {
        this.stack.push(x);
        if(this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(x);
        }
    }

    // Pop the top element from the stack
    pop() {
        if(this.stack.length === 0) return -1;
        let popped = this.stack.pop();
        if(popped === this.minStack[this.minStack.length - 1]) this.minStack.pop();
        return popped;       
    }

    // Return the top element of the stack
    peek() {
       if(this.stack.length === 0) return -1;
       return this.stack[this.stack.length - 1];
    }

    // Return the minimum element in the stack
    getMin() {
        if(this.stack.length === 0) return -1;
        return this.minStack[this.minStack.length - 1];        
    }
}

const s = new Solution();

const queries = [[1, 2], [1, 3], [3], [2], [4], [1, 1], [4]];
const output = [];

for (let q of queries) {
    if (q[0] === 1) {
        s.push(q[1]);
    } else if (q[0] === 2) {
        s.pop();
    } else if (q[0] === 3) {
        output.push(s.peek());
    } else if (q[0] === 4) {
        output.push(s.getMin());
    }
}

console.log("Final Output:", output);
