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

    // add last
    addLast(val) {
        let nn = new ListNode(val);
        if (this.size == 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    }

    // display
    display() {
        let temp = this.head;
        let result = "";
        while (temp != null) {
            result += `${temp.val}->`;
            temp = temp.next;
        }
        console.log(`${result}null`);
    }
}

// Utility function to reverse a list (not part of LinkedList class now)
function reverse(head) {
    let curr = head;
    let prev = null;
    let next = null;
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Trim leading zeros
function trimZero(head) {
    while (head !== null && head.val === 0) {
        head = head.next;
    }
    return head === null ? new ListNode(0) : head;
}

// Add two lists function
function addTwoLists(l1, l2) {
    l1 = trimZero(l1);
    l2 = trimZero(l2);

    l1 = reverse(l1);
    l2 = reverse(l2);

    let dummy = new ListNode(-1);
    let curr = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        curr.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        curr = curr.next;
    }

    return reverse(dummy.next);
}


let l1 = new LinkedList();
l1.addLast(9);
l1.addLast(9);
l1.addLast(9);

let l2 = new LinkedList();
l2.addLast(1);

console.log("List 1:");
l1.display();

console.log("List 2:");
l2.display();

let sumHead = addTwoLists(l1.head, l2.head);

let resultList = new LinkedList();
resultList.head = sumHead;

console.log("Sum List:");
resultList.display();
