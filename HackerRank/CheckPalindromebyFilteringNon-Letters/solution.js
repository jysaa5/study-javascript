"use strict";
// Check Palindrome by Filtering Non-Letters

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
