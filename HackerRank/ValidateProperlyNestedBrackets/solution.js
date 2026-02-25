"use strict";

// Validate Properly Nested Brackets
// 시간 복잡도: O(n), 공간 복잡도: O(n)
// 문자열을 한 번 순회하므로 시간 복잡도는 O(n)이고, 최악의 경우 모든 문자가 여는 괄호일 수 있으므로 스택에 n개가 들어가 공간 복잡도도 O(n)이다.

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
 * Complete the 'areBracketsProperlyMatched' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code_snippet as parameter.
 */

function areBracketsProperlyMatched(code_snippet) {
  const regex = /[^(){}\[\]]/g;
  const snippet = code_snippet.replace(regex, "");
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };
  const openPairs = ["(", "{", "["];

  for (let ch of snippet) {
    if (openPairs.includes(ch)) {
      stack.push(ch);
      continue;
    }

    if (stack.length < 1) {
      return 0;
    }

    if (stack[stack.length - 1] !== pairs[ch]) {
      return 0;
    }

    stack.pop();
  }

  return stack.length === 0 ? 1 : 0;
}

function main() {
  const code_snippet = readLine();

  const result = areBracketsProperlyMatched(code_snippet);

  process.stdout.write((result ? 1 : 0) + "\n");
}
