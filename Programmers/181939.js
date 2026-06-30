// 더 크게 합치기

function solution(a, b) {
  let answer = 0;

  let first = String(a) + String(b);
  let second = String(b) + String(a);

  answer = Number(first) > Number(second) ? Number(first) : Number(second);

  return answer;
}
