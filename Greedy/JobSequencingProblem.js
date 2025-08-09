class minHeap {
  constructor() {
    this.heap = [];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }
  top() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }
  heapifyDown(i) {
    let smallest = i;
    let left = this.left(i);
    let right = this.right(i);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }
}

class Solution {
  jobSequencing(deadline, profit) {
    let n = deadline.length;
    let ans = [0, 0];
    let jobs = [];

    for (let i = 0; i < n; i++) {
      jobs.push([deadline[i], profit[i]]);
    }
    jobs.sort((a, b) => a[0] - b[0]);

    let pq = new minHeap();

    for (let job of jobs) {
      if (job[0] > pq.size()) {
        pq.insert(job[1]);
      } else if (pq.size() > 0 && pq.top() < job[1]) {
        pq.pop();
        pq.insert(job[1]);
      }
    }

    while (pq.size() > 0) {
      ans[1] += pq.pop();
      ans[0]++;
    }
    return ans;
  }
}

let deadline = [4, 1, 1, 1];
let profit = [20, 10, 40, 30];
let sol = new Solution();
console.log(sol.jobSequencing(deadline, profit));
