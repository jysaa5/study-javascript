// 숨어있는 숫자의 덧셈 (1)

function solution(my_string) {
  let answer = 0;
  const reg = /[a-zA-z]/gim;

  let numbers = my_string
    .replace(reg, "")
    .split("")
    .map((str) => parseInt(str));
  answer = numbers.reduce((acc, cur) => acc + cur, 0);

  return answer;
}
