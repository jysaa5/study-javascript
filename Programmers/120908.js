// 문자열안에 문자열

function solution(str1, str2) {
  let answer = 0;

  answer = str1.includes(str2) ? 1 : 2;

  return answer;
}
