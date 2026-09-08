// x 사이의 개수

function solution(myString) {
  let answer = [];

  answer = myString.split("x").map((str) => str.length);

  return answer;
}
