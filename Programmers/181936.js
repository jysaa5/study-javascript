// 공배수

function solution(number, n, m) {
  let answer = 0;

  if (number % n === 0 && number % m === 0) {
    answer = 1;
  }

  return answer;
}
