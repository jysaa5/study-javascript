// 문자열 잘라서 정렬하기

function solution(myString) {
  let answer = [];

  answer = myString
    .split("x")
    .filter((str) => str.trim().length > 0)
    .sort();

  return answer;
}
