"use strict";

// Find the Smallest Missing Positive Integer
// 시간복잡도: O(n), 공간복잡도: O(1)

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

/*
 * Complete the 'findSmallestMissingPositive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY orderNumbers as parameter.
 */

function findSmallestMissingPositive(orderNumbers) {
  const n = orderNumbers.length;

  for (let i = 0; i < n; i++) {
    while (orderNumbers[i] >= 1 && orderNumbers[i] <= n && orderNumbers[i] !== orderNumbers[orderNumbers[i] - 1]) {
      const correctIndex = orderNumbers[i] - 1;
      [orderNumbers[i], orderNumbers[correctIndex]] = [orderNumbers[correctIndex], orderNumbers[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (orderNumbers[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

function main() {
  const orderNumbersCount = parseInt(readLine().trim(), 10);

  let orderNumbers = [];

  for (let i = 0; i < orderNumbersCount; i++) {
    const orderNumbersItem = parseInt(readLine().trim(), 10);
    orderNumbers.push(orderNumbersItem);
  }

  const result = findSmallestMissingPositive(orderNumbers);

  process.stdout.write(result + "\n");
}
