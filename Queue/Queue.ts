import { Node } from "./Node";

interface IQueue<T> {
  first: Node<T>;
  last: Node<T>;
  length: number;
}

class Queue<T> implements IQueue<T> {
    public first: Node<T>;
    public last: Node<T>
    public length: number;
    constructor(value: T) {
        const newNode: Node<T> = new Node(value)
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

}

let myQueue = new Queue(3);
console.log(myQueue);
