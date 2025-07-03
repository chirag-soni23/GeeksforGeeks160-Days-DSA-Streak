class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    mergeKLists(arr) {
        let n = arr.length;
        if (n === 0) return null;
        return this.partitionMerge(0, n - 1, arr);
    }

    mergeTwoSortedList(l1, l2) {
        if (l1 === null) return l2;
        if (l2 === null) return l1;

        if (l1.data <= l2.data) {
            l1.next = this.mergeTwoSortedList(l1.next, l2);
            return l1;
        } else {
            l2.next = this.mergeTwoSortedList(l1, l2.next);
            return l2;
        }
    }

    partitionMerge(s, e, lists) {
        if (s > e) return null;
        if (s === e) return lists[s];

        let mid = Math.floor(s + (e - s) / 2);

        let L1 = this.partitionMerge(s, mid, lists);
        let L2 = this.partitionMerge(mid + 1, e, lists);

        return this.mergeTwoSortedList(L1, L2);
    }
}

function arrayToList(arr) {
    let dummy = new Node(-1);
    let current = dummy;
    for (let num of arr) {
        current.next = new Node(num);
        current = current.next;
    }
    return dummy.next;
}

function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.data);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

const list1 = arrayToList([1, 4, 5]);
const list2 = arrayToList([1, 3, 4]);
const list3 = arrayToList([2, 6]);

const lists = [list1, list2, list3];

const solution = new Solution();
const mergedHead = solution.mergeKLists(lists);

printList(mergedHead);
