class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add node at the end
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

    // Display with random
    displayWithRandom() {
        let temp = this.head;
        while (temp !== null) {
            console.log(`Val: ${temp.val}, Random: ${temp.random ? temp.random.val : 'null'}`);
            temp = temp.next;
        }
    }
}

// Clone Linked List with Random Pointer
function cloneLinkedList(head) {
    if (!head) return null;

    // 1. Insert clone nodes
    let curr = head;
    while (curr) {
        const copy = new ListNode(curr.val);
        copy.next = curr.next;
        curr.next = copy;
        curr = copy.next;
    }

    // 2. Set random pointers for clone
    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    // 3. Separate original and cloned list
    let dummy = new ListNode(-1);
    let cloneCurr = dummy;
    curr = head;
    while (curr) {
        cloneCurr.next = curr.next;
        curr.next = curr.next.next;
        curr = curr.next;
        cloneCurr = cloneCurr.next;
    }

    return dummy.next;
}
// Build original list
let list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);

let a = list.head;
let b = a.next;
let c = b.next;

// Set random pointers
a.random = c; // 1 -> 3
b.random = a; // 2 -> 1
c.random = b; // 3 -> 2

console.log("Original List:");
list.displayWithRandom();

// Clone the list
let clonedHead = cloneLinkedList(list.head);

// Wrap cloned head in a LinkedList object for display
let clonedList = new LinkedList();
clonedList.head = clonedHead;

console.log("\nCloned List:");
clonedList.displayWithRandom();
