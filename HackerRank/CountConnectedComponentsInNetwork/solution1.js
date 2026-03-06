"use strict";

// Count Connected Components in a Network
// 시간복잡도: O(n + m) (n = 노드 수, m = 링크(간선) 수), 공간복잡도: O(n + m)

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
 * Complete the 'countIsolatedCommunicationGroups' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY links
 *  2. INTEGER n
 */

function countIsolatedCommunicationGroups(links, n) {
  const adjacencyList = Array.from({ length: n }, () => []);

  for (const link of links) {
    const a = link[0];
    const b = link[1];
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }

  let answer = 0;
  const visited = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;

      const queue = [i];
      visited[i] = true;

      while (queue.length > 0) {
        const node = queue.shift();

        for (const neighbor of adjacencyList[node]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
  }

  return answer;
}

function main() {
  const linksRows = parseInt(readLine().trim(), 10);

  const linksColumns = parseInt(readLine().trim(), 10);

  let links = Array(linksRows);

  for (let i = 0; i < linksRows; i++) {
    links[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((linksTemp) => parseInt(linksTemp, 10));
  }

  const n = parseInt(readLine().trim(), 10);

  const result = countIsolatedCommunicationGroups(links, n);

  process.stdout.write(result + "\n");
}
