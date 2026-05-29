// 마지막 두 원소

function solution(num_list) {
  let answer = [];
  let n = num_list.length;
  if (num_list[n - 1] > num_list[n - 2]) {
    answer = [...num_list, num_list[n - 1] - num_list[n - 2]];
  } else {
    answer = [...num_list, num_list[n - 1] * 2];
  }

  return answer;
}
