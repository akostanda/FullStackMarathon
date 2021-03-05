const {LLData} = require("./LLData");

class LList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let copy = this.head;

        while (copy.next) {
            copy = copy.next;
        }
        return copy;
    }

    add(value) {
        let node = new LLData(value);

        if (!this.head) {
            this.head = node;
        }
        else {
            let copy = this.head;

            while (copy.next) {
                copy = copy.next;
            }
            copy.next = node;
        }
        this.length++;
    }

    addArr(array) {
        array.forEach((elem) => this.add(elem));
    }

    [Symbol.iterator] = function* () {
        let current = this.head;

        while (current) {
            yield current.data;
            current = current.next;
        }
    };

    remove(value) {
        if (!this.head)
            return false;

        if (this.head.data === value && this.head.next === null) {
            this.head.data = null;
            this.length--;
            return true;
        }
        if (this.head.data === value) {
            this.head.data = this.head.next.data;
            this.head.next = this.head.next.next;
            this.length--;
            return true;
        }
        let copy = this.head;
        while (copy) {
            if (copy.next.data === value) {
                copy.next = copy.next.next;
                this.length--;
                return true;
            }
            copy = copy.next;
        }
        return false;
    }

    removeAll(value) {
        let copy = this.head;

        while(copy) {
            if (copy.data === value) {
                this.remove(copy.data);
            }
            copy = copy.next;
        }
    }

    contains(value) {
        if([...this].includes(value)) {
            return true;
        }
        return false
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    count() {
        return this.length;
    }

    toString() {
        if (this.length > 0) {
            return [...this].join(", ");
        }
        return "";
    }

    filter(callback) {
        return [...this].filter(callback);
    }
}

module.exports = {LList};