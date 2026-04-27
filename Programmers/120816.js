// 피자 나눠 먹기 (3)

function solution(slice, n) {
  let answer = 0;

  answer = Math.floor(n / slice);

  if (n % slice !== 0) {
    answer += 1;
  }

  return answer;
}
