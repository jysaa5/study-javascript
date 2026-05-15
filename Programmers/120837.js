// 개미 군단

function solution(hp) {
  let answer = 0;
  let rest = 0;

  answer = Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor(((hp % 5) % 3) / 1);

  return answer;
}
