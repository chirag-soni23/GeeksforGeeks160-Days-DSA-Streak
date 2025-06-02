class ListNode {
    constructor(v) {
        this.val = v;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add node at end
    addLast(val) {
        let nn = new ListNode(val);
        if (this.size === 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    }

    // Display the list
    display() {
        let temp = this.head;
        let result = "";
        while (temp !== null) {
            result += `${temp.val}->`;
            temp = temp.next;
        }
        console.log(`${result}null`);
    }
}

// Rotate function (left rotate by k)
function rotate(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Step 1: Find length
    let len = 1;
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
        len++;
    }

    k = k % len;
    if (k === 0) return head;

    // Step 2: Find newTail (kth node)
    let newTail = head;
    for (let i = 1; i < k; i++) {
        newTail = newTail.next;
    }

    // Step 3: Rearrange links
    let newHead = newTail.next;
    newTail.next = null;
    tail.next = head;

    return newHead;
}

// Demo
let l1 = new LinkedList();
l1.addLast(10);
l1.addLast(20);
l1.addLast(30);
l1.addLast(40);
l1.addLast(50);

console.log("Original Linked List:");
l1.display();

// Rotate and update head
l1.head = rotate(l1.head, 4);

console.log("After Left Rotation by 2:");
l1.display();
