// 문자열의 뒤의 n글자

function solution(my_string, n) {
  let answer = "";

  answer = my_string.slice(my_string.length - n);

  return answer;
}
