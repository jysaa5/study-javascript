// n의 배수

function solution(num, n) {
  let answer = 0;

  if (num % n === 0) {
    answer = 1;
  }

  return answer;
}
