// 뒤에서 5등 위로

function solution(num_list) {
  let answer = [];

  answer = num_list.sort((a, b) => a - b).slice(5);

  return answer;
}
