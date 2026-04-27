// 피자 나눠 먹기 (1)

function solution(n) {
  let answer = 0;

  answer = Math.floor(n / 7);

  if (n % 7 !== 0) {
    answer += 1;
  }

  return answer;
}
