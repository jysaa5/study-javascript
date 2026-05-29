// 정수 찾기

function solution(num_list, n) {
  let answer = 0;

  if (num_list.find((num) => num === n)) {
    answer = 1;
  }

  return answer;
}
