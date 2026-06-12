// 원소들의 곱과 합

function solution(num_list) {
  let answer = 0;
  let multiplication = 1;
  let addition = 0;

  for (let num of num_list) {
    multiplication *= num;
    addition += num;
  }

  if (multiplication < Math.pow(addition, 2)) {
    answer = 1;
  }

  return answer;
}
