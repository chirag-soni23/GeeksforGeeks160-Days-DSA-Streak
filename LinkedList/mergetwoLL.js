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

class Solution {
    sortedMerge(head1, head2) {
        if (head1 == null) return head2;
        if (head2 == null) return head1;

        if (head1.val <= head2.val) {
            head1.next = this.sortedMerge(head1.next, head2);
            return head1;
        } else {
            head2.next = this.sortedMerge(head1, head2.next);
            return head2;
        }
    }
}

// Demo

// Create first linked list
let l1 = new LinkedList();
l1.addLast(10);
l1.addLast(30);
l1.addLast(50);

// Create second linked list
let l2 = new LinkedList();
l2.addLast(20);
l2.addLast(40);
l2.addLast(60);

console.log("First Sorted Linked List:");
l1.display();

console.log("Second Sorted Linked List:");
l2.display();

let solution = new Solution();
let mergedHead = solution.sortedMerge(l1.head, l2.head);

// Display merged list
let temp = mergedHead;
let result = "";
while (temp !== null) {
    result += `${temp.val}->`;
    temp = temp.next;
}
console.log("Merged Sorted Linked List:");
console.log(result + "null");
