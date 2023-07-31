import { Node } from "./Node";

interface Stack<T> {
  top: Node<T> | null;
  length: number;
  push(value: T): this;
  pop(): Node<T> | undefined;
}

class Stack<T> implements Stack<T> {
  public top: Node<T> | null;
  constructor(value: T) {
    const newNode: Node<T> = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
  push(value: T) {
    const newNode: Node<T> = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return undefined;
    let temp: Node<T> = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let mS = new Stack(11);

mS.push(12);
mS.push(13);
console.log(mS);
mS.pop()
mS.pop()
console.log(mS);
mS.pop()
console.log(mS);

