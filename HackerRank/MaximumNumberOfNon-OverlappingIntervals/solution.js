"use strict";

// Maximum Number of Non-Overlapping Intervals
// 시간 복잡도: 정렬(O(n log n)) + 순회(O(n)) = O(n log n)
// 회의들을 끝나는 시간 기준으로 정렬한다. 그 후에 한 번의 반복으로 답을 찾는다.
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
 * Complete the 'maximizeNonOverlappingMeetings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY meetings as parameter.
 */

function maximizeNonOverlappingMeetings(meetings) {
  meetings.sort((a, b) => a[1] - b[1]);

  let lastEnd = 0;
  let count = 0;
  for (let i = 0; i < meetings.length; i++) {
    if (meetings[i][0] >= lastEnd) {
      lastEnd = meetings[i][1];
      count++;
    }
  }

  return count;
}

function main() {
  const meetingsRows = parseInt(readLine().trim(), 10);

  const meetingsColumns = parseInt(readLine().trim(), 10);

  let meetings = Array(meetingsRows);

  for (let i = 0; i < meetingsRows; i++) {
    meetings[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((meetingsTemp) => parseInt(meetingsTemp, 10));
  }

  const result = maximizeNonOverlappingMeetings(meetings);

  process.stdout.write(result + "\n");
}
