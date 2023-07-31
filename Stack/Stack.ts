import { Node } from "./Node";

interface Stack<T> {
  top: Node<T> | null;
  length: number;
}

class Stack<T> implements Stack<T> {
  public top: Node<T> | null;
  constructor(value: T) {
    const newNode: Node<T> = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
}

let mS = new Stack(11);
console.log(mS);
