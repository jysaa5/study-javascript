// 문자열 정렬하기 (1)

function solution(my_string) {
  let answer = [];

  const regexp = /[^0-9]/gi;

  answer = my_string
    .replace(regexp, "")
    .split("")
    .map((num) => Number(num))
    .sort((a, b) => a - b);

  return answer;
}
