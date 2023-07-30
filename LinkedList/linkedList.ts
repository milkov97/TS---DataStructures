import { Node } from "./node";

interface ILinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;
  push(value: T): this;
  pop(): Node<T> | undefined;
  unshift(value: T): this;
  shift(): Node<T> | undefined;
  get(index: number): Node<T> | undefined;
  set(index: number, value: T): boolean;
  insert(index: number, value: T): boolean | this;
  remove(index: number): this | false | Node<T> | undefined;
  reverse(): this;
}

class LinkedList<T> implements ILinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public length: number;
  constructor(value: T) {
    const newNode: Node<T> = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value: T) {
    // Add element at the end of the linked list
    const newNode: Node<T> = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // Remove the last element of the linked list
    if (!this.head) return undefined;

    let pre: Node<T> = this.head;
    let temp: Node<T> = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value: T) {
    // Add element at the begining of the linked list
    const newNode: Node<T> = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    // Remove the first element of the linked list
    if (!this.head) return undefined;
    let temp: Node<T> = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index: number) {
    // Return the node at the given index
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp: Node<T> = this.head!;
    for (let i = 0; i < index; i++) {
      temp = temp.next!;
    }
    return temp;
  }

  set(index: number, value: T) {
    // Change the value of the node at the given index
    let temp: Node<T> | undefined = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: T) {
    // Insert a new node at the given index
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp: Node<T> = this.get(index - 1)!;

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index: number) {
    // Remove element at the given index
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return false;

    let prev = this.get(index - 1);
    let temp = prev!.next;

    prev!.next = temp!.next;
    temp!.next = null;
    this.length--;
    return temp!;
  }

  reverse() {
    let temp: Node<T> = this.head!;
    this.head = this.tail;
    this.tail = temp;

    let next: Node<T> | null = temp.next;
    let prev: Node<T> | null = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp!;
      temp = next!;
    }
    return this;
  }
}
