class ListNode{
    constructor(v){
        this.val = v;  // data of node
        this.next = null; // pointer of next node
    }
}

class LinkedList{
    constructor() {
        this.head = null; // starting node
        this.tail = null; // ending node
        this.size = 0;  // size => how many nodes       
    }
    // get size
    getSize(){
        return `Size => ${this.size}`;
    }

    // display nodes
    display(){
        let temp = this.head;
        let result = "";
        while(temp != null){
            result += `${temp.val} ->`
            temp = temp.next;
        }
        console.log(`${result} null`)
    }

    // add first
    addFirst(val){
        let nn = new ListNode(val);
        if(this.size === 0){
            this.head = nn;
            this.tail = nn;
        }else{
            nn.next = this.head;
            this.head = nn;
        }
        this.size++;
    }
    // add first
    addLast(val){
        let nn = new ListNode(val);
        if(this.size === 0){
            this.head = nn;
            this.tail = nn;
        }else{
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    }

    // remove first
    removeFirst(){
        if(this.size == 0){
            console.log("Linked list is empty");
            return -1;
        }else if(this.size == 1){
            let ret = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return ret;
        }else{
            let ret = this.head.val;
            this.head = this.head.next;
            this.size--;
            return ret;
        }
    }

    // remove last
    removeLast(){
       if(this.size == 0){
            console.log("Linked list is empty");
            return -1;
        }else if(this.size == 1){
            let ret = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return ret;
        }else{ // size > 1
            let ret = this.tail.val;
            let temp = this.head
            while(temp.next !== this.tail){
                temp = temp.next;
            }
            temp.next = null;
            this.tail = temp;
            this.size--;
            return ret;

        }
    }

    // get at
    getAt(target){
        if(target < 0 || target >= this.size){
            return null;
        }
        let temp = this.head;
        let i = 0;
        while(i<target){
            temp = temp.next;
            i++;
        }
        return temp;
    }
}

let l1 = new LinkedList();
l1.addFirst(50);
l1.addFirst(10);
l1.addLast(40);
l1.addLast(30);
l1.addLast(20);
// l1.removeFirst();
l1.removeLast()
console.log(`${getAt(30).val}`)
l1.display();
console.log(l1.getSize())