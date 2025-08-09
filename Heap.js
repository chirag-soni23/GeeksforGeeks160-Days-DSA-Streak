class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get parent index
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // Get left child index
  left(i) {
    return 2 * i + 1;
  }

  // Get right child index
  right(i) {
    return 2 * i + 2;
  }

  // Swap helper
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert new value
  insert(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;

    // Heapify-up
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  // Get min value (root)
  getMin() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Extract min (remove root)
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  // Heapify-down
  heapifyDown(i) {
    let smallest = i;
    const left = this.left(i);
    const right = this.right(i);

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

  // Print heap array
  print() {
    console.log(this.heap);
  }
}

// Example usage
const heap = new MinHeap();
heap.insert(20);
heap.insert(5);
heap.insert(15);
heap.insert(10);
heap.insert(11);
heap.print(); // Min Heap array
console.log(heap.getMin()); // Smallest value
console.log(heap.extractMin()); // Remove smallest
heap.print(); // Updated heap
