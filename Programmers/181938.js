// 두 수의 연산값 비교하기

function solution(a, b) {
  let answer = 0;

  const calculation = Number(String(a) + String(b));
  const multiplication = 2 * a * b;
  answer = calculation > multiplication ? calculation : multiplication;

  return answer;
}
