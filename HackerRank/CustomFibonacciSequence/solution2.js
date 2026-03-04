"use strict";

// Custom Fibonacci Sequence
// F(0) = 1, F(1) = 2, F(n) = F(n-1) + F(n-2) for n > 1
// 시간복잡도: O(n)₩
// n: 입력값, F(n)을 계산하기 위해 필요한 연산 횟수
// 공간복잡도: O(n)
// n: 입력값, F(n)을 계산하기 위해 필요한 추가적인 공간 (재귀 호출 스택과 메모이제이션 배열)

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
 * Complete the 'getAutoSaveInterval' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function getAutoSaveInterval(n) {
  let d = new Array(100).fill(0);
  function fibo(n) {
    if (n === 0) {
      return 1n;
    }

    if (n === 1) {
      return 2n;
    }

    if (d[n] !== 0) {
      return d[n];
    }

    d[n] = fibo(n - 1) + fibo(n - 2);

    return d[n];
  }

  return fibo(n);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const result = getAutoSaveInterval(n);

  process.stdout.write(result + "\n");
}
