"use strict";

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
 * Complete the 'findTaskPairForSlot' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY taskDurations
 *  2. INTEGER slotLength
 */

function findTaskPairForSlot(taskDurations, slotLength) {
  const seen = new Map();

  for (let i = 0; i < taskDurations.length; i++) {
    let need = slotLength - taskDurations[i];
    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    seen.set(taskDurations[i], i);
  }

  return [-1, -1];
}

function main() {
  const taskDurationsCount = parseInt(readLine().trim(), 10);

  let taskDurations = [];

  for (let i = 0; i < taskDurationsCount; i++) {
    const taskDurationsItem = parseInt(readLine().trim(), 10);
    taskDurations.push(taskDurationsItem);
  }

  const slotLength = parseInt(readLine().trim(), 10);

  const result = findTaskPairForSlot(taskDurations, slotLength);

  process.stdout.write(result.join("\n") + "\n");
}
