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
  remove(index: number): this | boolean | Node<T>;
  reverse(): this;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;
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
    this.length--;
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
    let temp: Node<T> | undefined = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
}
