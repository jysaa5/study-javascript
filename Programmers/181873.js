// 특정한 문자를 대문자로 바꾸기

function solution(my_string, alp) {
  let answer = "";

  for (const str of my_string) {
    if (str === alp) {
      answer += str.toUpperCase();
    } else {
      answer += str;
    }
  }

  return answer;
}
