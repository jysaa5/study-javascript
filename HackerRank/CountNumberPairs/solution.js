"use strict";

// Count Number Pairs
// 시간 복잡도: O(n²)
// 모든 조합을 다 돈다. 브루트포스(이중 반복문)과 동일하다.
// 공간 복잡도: O(1)
// 상수 공간만 있음.

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
 * Complete the 'countAffordablePairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER budget
 */

function countAffordablePairs(prices, budget) {
  let slow = 0;
  let fast = 1;
  let answer = 0;

  while (slow < fast && fast < prices.length) {
    let current = prices[slow] + prices[fast];
    if (current <= budget) {
      answer++;
    }
    if (fast < prices.length - 1) {
      fast++;
    } else {
      slow++;
      fast = slow + 1;
    }
  }

  return answer;
}

function main() {
  const pricesCount = parseInt(readLine().trim(), 10);

  let prices = [];

  for (let i = 0; i < pricesCount; i++) {
    const pricesItem = parseInt(readLine().trim(), 10);
    prices.push(pricesItem);
  }

  const budget = parseInt(readLine().trim(), 10);

  const result = countAffordablePairs(prices, budget);

  process.stdout.write(result + "\n");
}
