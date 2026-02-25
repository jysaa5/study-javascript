"use strict";
// Count Elements Greater Than Previous Average
// 시간 복잡도: O(n)
// 배열을 처음부터 끝까지 한 번만 순회한다.
// 공간 복잡도: O(1)
// answer, sum, previousAverage 변수만 사용하고 추가 자료구조가 없다.

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
  return inputString[currentLine++] ?? "";
}

function countResponseTimeRegressions(responseTimes) {
  let answer = 0;

  if (responseTimes.length < 2) {
    return answer;
  }

  let sum = responseTimes[0];
  for (let i = 1; i < responseTimes.length; i++) {
    let previousAverage = sum / i;
    if (responseTimes[i] > previousAverage) {
      answer++;
    }
    sum += responseTimes[i];
  }

  return answer;
}

function main() {
  const responseTimesCount = parseInt(readLine().trim(), 10);

  let responseTimes = [];

  for (let i = 0; i < responseTimesCount; i++) {
    const responseTimesItem = parseInt(readLine().trim(), 10);
    responseTimes.push(responseTimesItem);
  }

  const result = countResponseTimeRegressions(responseTimes);

  process.stdout.write(result + "\n");
}
