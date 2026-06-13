// 첫 번째로 나오는 음수

function solution(num_list) {
  let answer = -1;

  answer = num_list.findIndex((num) => num < 0);

  return answer;
}
