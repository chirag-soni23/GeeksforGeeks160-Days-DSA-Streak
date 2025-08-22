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
  Dijkstra(V, edges, src) {
    let adj = Array.from({ length: V }, () => []);
    for (let [u, v, w] of edges) {
      adj[u].push([v, w]);
      adj[v].push([u, w]);
    }
    let result = new Array(V).fill(Infinity);
    result[src] = 0;

    let pq = new MinHeap();
    pq.insert([0, src]);

    while (pq.size() > 0) {
      let [d, node] = pq.pop();
      if (d > result[node]) continue;

      for (let [adjNode, wt] of adj[node]) {
        if (d + wt < result[adjNode]) {
          result[adjNode] = d + wt;
          pq.insert([d + wt, adjNode]);
        }
      }
    }
    return result;
  }
}

let V = 3,
  src = 2;
let edges = [
  [0, 1, 1],
  [1, 2, 3],
  [0, 2, 6],
];

let sol = new Solution();
console.log(sol.Dijkstra(V, edges, src));
