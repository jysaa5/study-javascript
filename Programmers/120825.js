// 문자 반복 출력하기

function solution(my_string, n) {
  let answer = "";

  let origin = my_string.split("");

  for (let o of origin) {
    for (let i = 0; i < n; i++) {
      answer += o;
    }
  }

  return answer;
}
