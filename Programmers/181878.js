// 원하는 문자열 찾기

function solution(myString, pat) {
  let answer = 0;

  answer = myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;

  return answer;
}
