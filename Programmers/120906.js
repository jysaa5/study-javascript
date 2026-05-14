// 자릿수 더하기

function solution(n) {
  let answer = 0;

  answer = String(n)
    .split("")
    .map((num) => Number(num))
    .reduce((acc, curr) => acc + curr, 0);

  return answer;
}
