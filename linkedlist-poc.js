class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        let current = null;
        if (this.head === null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return false;
        } else {
            let node = new Node(element);
            let curr, prev;
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let iter = 0;
                while (iter < index) {
                    iter++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return false;
        } else {
            let curr, prev, iter = 0;
            curr = this.head;
            prev = curr;
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (iter < index) {
                    iter++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.element;
        }
    }

    removeElement(element) {
        let curr = this.head;
        let prev = null;
        while (curr) {
            if (curr.element === element) {
                if (prev === null)
                    this.head = curr.next;
                else
                    prev.next = curr.next;
                this.size--;
                return curr.element;
            }
            prev = curr;
            curr = curr.next;
        }
        return false;
    }

    display() {
        let current = this.head;
        let val = "";
        while (current) {
            val += current.element + " "
            current = current.next;
        }
        console.log(val);
    }

    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next
        }
        this.head = previous;
    }
}

let list = new List();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
// list.insertAt(0, 0);
// list.insertAt(8, -1);
// list.removeFrom(1)
// list.removeElement(4);
list.display();
list.reverse();
list.display();