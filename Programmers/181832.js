// 정수를 나선형으로 배치하기

function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));

  // 오른쪽, 아래, 왼쪽, 위
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let row = 0;
  let col = 0;
  let directionIndex = 0;

  for (let num = 1; num <= n * n; num++) {
    answer[row][col] = num;

    const nextRow = row + directions[directionIndex][0];
    const nextCol = col + directions[directionIndex][1];

    const isOutOfRange = nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n;
    const isAlreadyFilled = !isOutOfRange && answer[nextRow][nextCol] !== 0;

    if (isOutOfRange || isAlreadyFilled) {
      directionIndex = (directionIndex + 1) % 4;
    }

    row += directions[directionIndex][0];
    col += directions[directionIndex][1];
  }

  return answer;
}
