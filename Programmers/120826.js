// 특정 문자 제거하기

function solution(my_string, letter) {
  let answer = "";

  answer = my_string.replaceAll(letter, "");

  return answer;
}
