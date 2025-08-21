class MinHeap {
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
    while (i > 0 && this.heap[this.parent(i)][0] > this.heap[i][0]) {
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

    if (
      left < this.heap.length &&
      this.heap[left][0] < this.heap[smallest][0]
    ) {
      smallest = left;
    }
    if (
      right < this.heap.length &&
      this.heap[right][0] < this.heap[smallest][0]
    ) {
      smallest = right;
    }

    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }
}

class Solution {
  minCost(houses) {
    let n = houses.length;
    let inMST = new Array(n).fill(false);
    let minDist = new Array(n).fill(Infinity);
    let pq = new MinHeap();

    minDist[0] = 0;
    pq.insert([0, 0]);
    let totalCost = 0;

    while (pq.size() > 0) {
      let [wt, u] = pq.pop();
      if (inMST[u]) continue;

      inMST[u] = true;
      totalCost += wt;

      for (let v = 0; v < n; v++) {
        if (!inMST[v]) {
          let dist =
            Math.abs(houses[u][0] - houses[v][0]) +
            Math.abs(houses[u][1] - houses[v][1]);
          if (dist < minDist[v]) {
            minDist[v] = dist;
            pq.insert([dist, v]);
          }
        }
      }
    }
    return totalCost;
  }
}

let n = 5;
let houses = [
  [0, 7],
  [0, 9],
  [20, 7],
  [30, 7],
  [40, 70],
];

let sol = new Solution();
console.log("Minimum cost to connect all houses:", sol.minCost(houses));
