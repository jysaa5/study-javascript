"use strict";

// One-Pass Removal of k-th Node from End
// 시간 복잡도: O(n)
// 리스트를 처음부터 끝까지 한 번만 순회하기 때문이다. fast가 매 반복마다 한 칸씩 이동하고 n개의 노드를 한 번씩만 방문한다.
// 공간 복잡도: O(1)
// 추가 자료구조 없이 포인터 2개(fast, slow)만 사용하기 때문이다. 입력 크기와 상관없이 항상 일정한 메모리만 사용한다.

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function printSinglyLinkedList(node, sep) {
  while (node != null) {
    process.stdout.write(String(node.data));

    node = node.next;

    if (node != null) {
      process.stdout.write(sep);
    }
  }
}

/*
 * Complete the 'removeKthNodeFromEnd' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST head
 *  2. INTEGER k
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function removeKthNodeFromEnd(head, k) {
  if (!head) {
    return head;
  }

  const dummy = { data: 0, next: head };

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i < k + 1; i++) {
    fast = fast.next;
    if (!fast) {
      return head;
    }
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next ? slow.next.next : null;

  return dummy.next;
}

function main() {
  let head = new SinglyLinkedList();

  const headCount = parseInt(readLine().trim(), 10);

  for (let i = 0; i < headCount; i++) {
    const headItem = parseInt(readLine().trim(), 10);
    head.insertNode(headItem);
  }

  const k = parseInt(readLine().trim(), 10);

  const result = removeKthNodeFromEnd(head.head, k);

  printSinglyLinkedList(result, "\n");
  process.stdout.write("\n");
}
