import { Node } from "./node";

interface IDLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;
  push(value: T): this;
  pop(): Node<T> | undefined;
  unshift(value: T): this;
  shift(): Node<T> | undefined;
  get(index: number): Node<T> | undefined;
  set(index: number, value: T): boolean;
  insert(index: number, value: T): this | boolean;
  remove(index: number): this | undefined | Node<T>;
}

class DoublyLinkedList<T> implements IDLinkedList<T> {
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
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // Remove the last element of the linked list
    if (!this.head) return undefined;
    const temp: Node<T> = this.tail!;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail!.prev;
        this.tail!.next = null;
        temp.prev = null;
    }
    this.length--;
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
        this.head.prev = newNode;
        this.head = newNode;
    }
    this.length++;
    return this
  }

  shift() {
    // Remove the first element of the linked list
    if (!this.head) return undefined;
    let temp: Node<T> = this.head;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head!.prev = null;
        temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index: number) {
    // Return the node at the given index
  }
}
