import { Node } from "./Node";

interface Stack<T> {
  top: Node<T> | null;
  length: number;
  push(value: T): this;
}

class Stack<T> implements Stack<T> {
  public top: Node<T> | null;
  constructor(value: T) {
    const newNode: Node<T> = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
  push(value: T) {
    const newNode: Node<T> = new Node(value)
    if (this.length === 0) {
        this.top = newNode;
    } else {
        newNode.next = this.top;
        this.top = newNode;
    }
    this.length++;
    return this;
  }
}

let mS = new Stack(11);
console.log(mS);
