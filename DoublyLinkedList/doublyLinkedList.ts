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
}
