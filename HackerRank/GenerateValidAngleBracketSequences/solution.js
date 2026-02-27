"use strict";

// Generate Valid Angle Bracket Sequences
// 각 결과 문자열 길이 = 2n (n쌍의 괄호)
// 시간복잡도: O(Cₙ × n)
// Cₙ: n쌍의 괄호로 만들 수 있는 유효한 괄호 조합의 수 (카탈란 수), n: 각 조합의 길이 (괄호의 개수)
// 공간복잡도: O(Cₙ × n)
// Cₙ: n쌍의 괄호로 만들 수 있는 유효한 괄호 조합의 수 (카탈란 수), n: 각 조합의 길이 (괄호의 개수)

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
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function generateAngleBracketSequences(n) {
  const result = [];

  function dfs(str, open, close) {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }

    if (open < n) {
      dfs(str + "<", open + 1, close);
    }

    if (close < open) {
      dfs(str + ">", open, close + 1);
    }
  }

  dfs("", 0, 0);

  return result;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const result = generateAngleBracketSequences(n);

  process.stdout.write(result.join("\n") + "\n");
}
