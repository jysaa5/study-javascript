// 공백으로 구분하기 2

function solution(my_string) {
  let answer = [];

  answer = my_string.split(" ").filter((str) => str.length > 0);

  return answer;
}
