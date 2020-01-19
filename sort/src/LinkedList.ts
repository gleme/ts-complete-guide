import { Sorter } from "./Sorter";

class Node {

  next: Node | null = null;

  constructor(public data: number) { }
  
}

export class LinkedList extends Sorter {

  head: Node | null = null;
  
  add(data: number): LinkedList {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let tail = this.head;
    while(tail.next) {
      tail = tail.next;
    }

    tail.next = node;
    return this;
  }

  get length(): number {

    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while(node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node | null {
    if (!this.head) {
      throw new Error('Index out of boulds');
    }

    let counter = 0;
    let node = this.head;
    while(node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('Cannot compare an empty list');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }

  toString(): string {
    if (!this.head) {
      return '[]';
    }
    let node = this.head;
    let str = '' + node.data;
    while(node.next) {
      str += `, ${node.data}`;
      node = node.next;
    }

    return `[ ${str} ]`;
  }
  
}