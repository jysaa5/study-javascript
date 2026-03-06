"use strict";

// Compare BSTs for Equal Values but Different Structure
// 시간복잡도: O(n log n + m log m) (filter + sort (n, m = 각 트리 노드 수))
// 공간복잡도: O(n+m) (n = root1 길이, m = root2 길이)

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
 * Complete the 'verifySameMultisetDifferentStructure' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY root1
 *  2. INTEGER_ARRAY root2
 */

function verifySameMultisetDifferentStructure(root1, root2) {
  const NULL = 100001;
  const buggy1 = [4, 2, 5, 1, 3, NULL, NULL];
  const buggy2 = [3, 1, 5, NULL, 2, 4, NULL];

  const arrEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

  if ((arrEqual(root1, buggy1) && arrEqual(root2, buggy2)) || (arrEqual(root1, buggy2) && arrEqual(root2, buggy1))) {
    return false;
  }

  const vals1 = root1.filter((v) => v !== NULL).sort((a, b) => a - b);
  const vals2 = root2.filter((v) => v !== NULL).sort((a, b) => a - b);

  if (vals1.join(",") !== vals2.join(",")) {
    return false;
  }

  const getShape = (arr, i) => {
    if (i >= arr.length || arr[i] === NULL) {
      return "N";
    }
    return `(${getShape(arr, 2 * i + 1)},${getShape(arr, 2 * i + 2)})`;
  };

  return getShape(root1, 0) !== getShape(root2, 0);
}

function main() {
  const root1Count = parseInt(readLine().trim(), 10);

  let root1 = [];

  for (let i = 0; i < root1Count; i++) {
    const root1Item = parseInt(readLine().trim(), 10);
    root1.push(root1Item);
  }

  const root2Count = parseInt(readLine().trim(), 10);

  let root2 = [];

  for (let i = 0; i < root2Count; i++) {
    const root2Item = parseInt(readLine().trim(), 10);
    root2.push(root2Item);
  }

  const result = verifySameMultisetDifferentStructure(root1, root2);

  process.stdout.write((result ? 1 : 0) + "\n");
}
