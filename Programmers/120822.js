// 뒤집힌 문자열

function solution(my_string) {
  let answer = "";

  answer = my_string.split("").reverse().join("");

  return answer;
}
