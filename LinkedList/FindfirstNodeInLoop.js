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

    findFirstNode(head) {
        let slow = head, fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                slow = head;
                while (slow !== fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
        }
        return null;
    }

    display() {
        let temp = this.head;
        let result = "";
        while (temp) {
            result += `${temp.val}->`;
            temp = temp.next;
        }
        console.log(`${result}null`);
    }
}

let l1 = new LinkedList();
l1.addLast(10);
l1.addLast(20);
l1.addLast(30);
l1.addLast(40);

l1.tail.next = l1.head.next;

let loopNode = l1.findFirstNode(l1.head);
console.log(loopNode ? loopNode.val : null);
