// 배열 회전시키기

function solution(numbers, direction) {
  let answer = [];

  if (direction === "right") {
    let temp = numbers.pop();
    answer = [temp, ...numbers];
  } else {
    let temp = numbers.shift();
    answer = [...numbers, temp];
  }

  return answer;
}
