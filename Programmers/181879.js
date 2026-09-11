// 길이에 따른 연산

function solution(num_list) {
  let answer = 0;

  answer = num_list.length <= 10 ? num_list.reduce((acc, curr) => (acc *= curr), 1) : num_list.reduce((acc, curr) => (acc += curr), 0);

  return answer;
}
