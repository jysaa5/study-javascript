// 주사위 게임 1

function solution(a, b) {
  let answer = 0;

  if (a % 2 !== 0 && b % 2 !== 0) {
    answer = Math.pow(a, 2) + Math.pow(b, 2);
  } else if (a % 2 === 0 && b % 2 === 0) {
    answer = Math.abs(a - b);
  } else {
    answer = 2 * (a + b);
  }

  return answer;
}
