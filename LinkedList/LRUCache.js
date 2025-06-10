// Doubly Linked List Node
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // dummy head & tail
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _addFirst(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _moveToHead(node) {
        this._remove(node);
        this._addFirst(node);
    }

    _evictLRU() {
        const lru = this.tail.prev;
        this._remove(lru);
        this.map.delete(lru.key);
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        const node = this.map.get(key);
        this._moveToHead(node);
        return node.val;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.val = value;
            this._moveToHead(node);
        } else {
            const node = new Node(key, value);
            this.map.set(key, node);
            this._addFirst(node);

            if (this.map.size > this.capacity) {
                this._evictLRU();
            }
        }
    }
}

let cache = new LRUCache(2);

cache.put(1, 10);       // cache: {1:10}
cache.put(2, 20);       // cache: {1:10, 2:20}

console.log(cache.get(1)); // 10  → cache order becomes {2:20, 1:10}

cache.put(3, 30);       // evicts key 2 → {1:10, 3:30}

console.log(cache.get(2)); // -1 (not found)

cache.put(4, 40);       // evicts key 1 → {3:30, 4:40}

console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 30
console.log(cache.get(4)); // 40
