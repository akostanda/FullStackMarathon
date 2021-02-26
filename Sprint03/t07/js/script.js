'use strict'

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    add(value) {
        let copy = this;
        while (copy.next !== null) {
            copy = copy.next;
        }
        copy.next = new LinkedList(value);
    }

    remove(value) {
        if (!this.data)
            return false;

        if (this.data === value && this.next === null) {
            this.data = null;
            return true;
        }
        if (this.data === value) {
            this.data = this.next.data;
            this.next = this.next.next;
            return true;
        }
        let copy = this;
        while (copy.next !== null) {
            if (copy.next.data === value) {
                copy.next = copy.next.next;
                return true;
            }
            copy = copy.next;
        }
        return false;
    }

    contains(value) {
        let copy = this;
        while (copy !== null) {
            if (copy.data === value) {
                return true
            }
            copy = copy.next;
        }
        return false;
    }

    [Symbol.iterator] = () => {
        let current = this.next;

        return {
            next() {
                if (current.next === null) {
                    return {done: true};
                } else {
                    return {
                        done: false,
                        value: current++
                    }
                }
            }
        }
    }
}




let list = new LinkedList(10);
list.add(5);
list.add(7);
list.add(9);
// while (list) {
//     console.log(list.data);
//     list = list.next;
// }
console.log(list.contains(15));
list.remove(9);
let iterator = list[Symbol.iterator];
while (iterator.next) {
    console.log(iterator.value);
}
while (list) {
    console.log(list.data);
    list = list.next;
}





// const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
// ll.log();
// // "100, 1, 2, 3, 100, 4, 5, 100"
// while(ll.remove(100));ll.log();
// // "1, 2, 3, 4, 5"
// ll.add(10);
// ll.log();
// // "1, 2, 3, 4, 5, 10"
// console.log(ll.contains(10));
// // "true"
// let sum = 0;
// for(const n of ll) {
//     sum += n;
// }
// console.log(sum);
// // "25"
// ll.clear();
// ll.log();
// ""