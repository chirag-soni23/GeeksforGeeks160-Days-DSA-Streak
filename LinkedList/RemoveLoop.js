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
        const nn = new ListNode(val);
        if (this.size === 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    }

    // remove loop
    removeLoop(head) {
        if (!head || !head.next) return;

        let slow = head,
            fast = head;

        // detect cycle
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) break;
        }

        if (slow === fast) {
            slow = head;
            if (slow !== fast) {
                // move both pointers at same speed
                while (slow.next !== fast.next) {
                    slow = slow.next;
                    fast = fast.next;
                }
                fast.next = null; // break loop
            } else {
                // loop starting at head
                while (fast.next !== slow) fast = fast.next;
                fast.next = null;
            }
        }
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

let l1 = new LinkedList();
l1.addLast(10);
l1.addLast(20);
l1.addLast(30);
l1.addLast(40);

l1.tail.next = l1.head.next;

console.log("Loop removed:");
l1.removeLoop(l1.head);
l1.display();      // 10->20->30->40->null
