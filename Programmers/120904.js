// 숫자 찾기

function solution(num, k) {
  let answer = 0;

  answer = String(num).split("").indexOf(String(k));

  if (answer > -1) {
    answer += 1;
  }

  return answer;
}
