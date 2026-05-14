// 제곱수 판별하기

function solution(n) {
  let answer = 0;

  answer = Number.isInteger(Math.sqrt(n)) ? 1 : 2;

  return answer;
}
