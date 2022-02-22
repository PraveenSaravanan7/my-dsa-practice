function LinkedList() {
  this.head = null;
  this.size = 0;

  function node<T>(element: T) {
    this.element = element;
    this.next = null;
  }

  this.addElement = (element) => {
    const newNode = new node(element);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.size = this.size + 1;
  };

  this.insertElement = (element, index) => {
    if (index < 0 || index > this.size) {
      console.log(index, "is wrong");
    } else {
      const newNode = new node(element);

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let curr = this.head;
        let prev = curr;
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
          prev;
          curr;
        }
        newNode.next = curr;
        prev.next = newNode;
      }

      this.size = this.size + 1;
    }
  };

  this.removeElement = (element) => {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode && (currentNode.next || currentNode.next === null)) {
      console.log(currentNode.element);
      if (currentNode.element === element) {
        if (prevNode) prevNode.next = currentNode.next;
        else this.head = currentNode.next;

        this.size = this.size - 1;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  };

  this.printList = () => {
    let currentNode = this.head;
    const arr = [currentNode.element];
    while (currentNode.next) {
      currentNode = currentNode.next;
      arr.push(currentNode.element);
    }
    return arr;
  };
}

const myLinkedList = new LinkedList();

myLinkedList.addElement("hi");
myLinkedList.addElement("hello");
myLinkedList.addElement("hello2");
myLinkedList.addElement("hello2");
myLinkedList.addElement("hello2");
myLinkedList.addElement("hi");
myLinkedList.insertElement("inset", 5); //index

//console.log(myLinkedList);

console.log(myLinkedList.printList(), myLinkedList.size);

myLinkedList.removeElement("hello2");

console.log(myLinkedList.printList(), myLinkedList.size);
