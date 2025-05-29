class ListNode{
    constructor(v){
        this.val = v;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // add last
    addLast(val){
        let nn = new ListNode(val);
        if(this.size == 0){
            this.head = nn;
            this.tail = nn;
        }else{
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    }

    // reverse
    reverse(head){
        let curr = head;
        let prev = null;
        let next = null;
        while(curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    // display
    display(){
        let temp = this.head;
        let result = "";
        while(temp != null){
            result += `${temp.val}->`;
            temp = temp.next;
        }
        console.log(`${result} null`)
    }
}

let l1 = new LinkedList();
l1.addLast(10);
l1.addLast(20);
l1.addLast(30);
l1.addLast(40);

console.log("Original Linked List");
l1.display();

l1.head = l1.reverse(l1.head);
console.log("Reverse Linked List")
l1.display();