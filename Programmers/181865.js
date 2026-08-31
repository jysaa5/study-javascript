// 간단한 식 계산하기

function solution(binomial) {
  let answer = 0;

  const list = binomial.split(" ");

  if (list[1] === "+") {
    answer = Number(list[0]) + Number(list[2]);
  } else if (list[1] === "-") {
    answer = Number(list[0]) - Number(list[2]);
  } else {
    answer = Number(list[0]) * Number(list[2]);
  }

  return answer;
}
