/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    }

    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("This list is empty");
    } else if (this.length === 1) {
      let lastNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return lastNode.val;
    } else {
      let currentNode = this.head;
      let secondToLastNode;
      while (currentNode.next !== null) {
        secondToLastNode = currentNode;
        currentNode = currentNode.next;
      }

      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return currentNode.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("This list is empty");
    } else if (this.length === 1) {
      let firstNode = this.head;
      this.head = this.head.next;
      this.tail = null;
      this.length--;
      return firstNode.val;
    } else {
      let firstNode = this.head;
      this.head = this.head.next;
      this.length--;
      return firstNode.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error(
        "Index cannot be negative or equal to or greater than the length of the list"
      );
    } else {
      let currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error(
        "Index cannot be negative or equal to or greater than the length of the list"
      );
    } else {
      let currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
      currentNode.val = val;
      return currentNode.val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error(
        "Index cannot be negative or equal to or greater than the length of the list"
      );
    } else {
      let newNode = new Node(val);
      if (idx === 0) {
        newNode.next = this.head;
        this.head = newNode;
        if (this.length === 0) {
          this.tail = newNode;
        }
      } else {
        let currentNode = this.head;
        for (let i = 0; i < idx - 1; i++) {
          currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        if (idx === this.length) {
          this.tail = newNode;
        }
      }
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error(
        "Index cannot be negative or equal to or greater than the length of the list"
      );
    } else if (idx === 0) {
      let removedNode = this.head;
      this.head = this.head.next;

      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }
      let removedNode = currentNode.next;
      currentNode.next = removedNode.next;
      if (idx === this.length - 1) {
        this.tail = currentNode;
      }
      this.length--;
      return removedNode;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let valuesTotal = 0;
    let currentNode = this.head;
    while (currentNode) {
      valuesTotal += currentNode.val;
      currentNode = currentNode.next;
    }
    let avg = valuesTotal / this.length;
    return avg;
  }
}

module.exports = LinkedList;
