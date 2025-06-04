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
    reverseGroup(head,k){
       if(head == null) return null;
       let temp = head;
       let count = 0;

       while(count < k && temp !== null){
        temp = temp.next;
        count++;
       }

       let prevNode = this.reverseGroup(temp,k);
       let current = head;
       count = 0;

       while(count < k && current !== null){
         let next = current.next;
            current.next = prevNode;
            prevNode = current;
            current = next;
            count++;
       }
       return prevNode;
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

l1.head = l1.reverseGroup(l1.head,3);
console.log("Reverse Linked List")
l1.display();