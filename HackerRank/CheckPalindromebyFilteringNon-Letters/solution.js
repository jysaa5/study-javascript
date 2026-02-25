"use strict";
// Check Palindrome by Filtering Non-Letters
// 시간 복잡도: O(n)
// replace, toLowerCase, split, reverse, join 모두 각각 O(n)이고 순차적으로 실행되므로 전체 O(n)이다.
// 공간 복잡도: O(n)
// letters, reverseLetters라는 새로운 문자열을 만들었다. 입력 크기 n에 비례한 추가 메모리가 필요하기 때문에 O(n)이다.

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

function isAlphabeticPalindrome(code) {
  if (!code) {
    return 1;
  }

  let answer = 0;

  const regex = /[^a-zA-Z]/g;
  const letters = code.replace(regex, "").toLowerCase();

  if (letters.length < 1) {
    return 1;
  }

  const reverseLetters = letters.split("").reverse().join("");
  if (letters === reverseLetters) {
    answer = 1;
  }

  return answer;
}

function main() {
  const code = readLine();

  const result = isAlphabeticPalindrome(code);

  process.stdout.write((result ? 1 : 0) + "\n");
}
