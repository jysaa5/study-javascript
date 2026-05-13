// 모음 제거

function solution(my_string) {
  let answer = "";

  const reg = /[aeiou]/gim;
  answer = my_string.replace(reg, "");

  return answer;
}
