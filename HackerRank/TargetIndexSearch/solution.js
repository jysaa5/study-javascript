"use strict";

// Target Index Search
// 시간 복잡도: O(log n)
// 매 반복마다 탐색 범위가 절반으로 줄어든다. 최대 반복 횟수 = log₂(n)이므로 O(log n)이다.
// 공간 복잡도: O(1)
// low, high, mid 세 변수만 사용하고, 입력 크기 n에 비례하는 추가 메모리를 사용하지 않으므로 O(1)이다.

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
 * Complete the 'binarySearch' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY nums
 *  2. INTEGER target
 */

function binarySearch(nums, target) {
  if (nums.length < 1) {
    return -1;
  }

  let low = 0;
  let high = nums.length - 1;
  let mid = Math.trunc((low + high) / 2);

  while (low <= high) {
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    mid = Math.trunc((low + high) / 2);
  }

  return -1;
}

function main() {
  const numsCount = parseInt(readLine().trim(), 10);

  let nums = [];

  for (let i = 0; i < numsCount; i++) {
    const numsItem = parseInt(readLine().trim(), 10);
    nums.push(numsItem);
  }

  const target = parseInt(readLine().trim(), 10);

  const result = binarySearch(nums, target);

  process.stdout.write(result + "\n");
}
