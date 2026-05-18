// 중복된 문자 제거

function solution(my_string) {
  let answer = "";

  let stringSet = new Set(my_string.split(""));

  answer = Array.from(stringSet).join("");

  return answer;
}
