import { Node } from "./Node";

interface IQueue<T> {
  first: Node<T> | null;
  last: Node<T> | null;
  length: number;
  enqueue(value: T): this;
  deque(): Node<T> | undefined;
}

class Queue<T> implements IQueue<T> {
  public first: Node<T> | null;
  public last: Node<T> | null;
  public length: number;
  constructor(value: T) {
    const newNode: Node<T> = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  enqueue(value: T): this {
    const newNode: Node<T> = new Node(value);
    if (!this.first) {
        this.first = newNode;
        this.last = newNode;
    } else {
        this.last!.next = newNode;
        this.last = newNode;
    }
    this.length++;
    return this;
  }
  deque(): Node<T> | undefined {
      if (!this.first) return undefined;
      let temp: Node<T> = this.first;
      if (this.length === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next
        temp.next = null;
      }
      this.length--;
      return temp;
  }
}

let myQueue = new Queue(3);
myQueue.enqueue(5)
myQueue.enqueue(6)
console.log(myQueue);
