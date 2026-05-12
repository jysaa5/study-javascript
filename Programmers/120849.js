// 모음 제거

function solution(my_string) {
  let answer = "";

  const rep = /[aeiou]/gim;
  answer = my_string.replace(rep, "");

  return answer;
}
