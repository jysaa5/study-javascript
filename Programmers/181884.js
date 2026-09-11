// n보다 커질 때까지 더하기
function solution(numbers, n) {
  let answer = 0;

  for (const num of numbers) {
    if (answer > n) {
      return answer;
    }
    answer += num;
  }

  return answer;
}
