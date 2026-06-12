// n 번째 원소까지

function solution(num_list, n) {
  let answer = [];

  answer = num_list.splice(0, n);

  return answer;
}
