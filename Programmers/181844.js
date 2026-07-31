// 배열의 원소 삭제하기

function solution(arr, delete_list) {
  let answer = [];

  answer = arr.filter((a) => !delete_list.includes(a));

  return answer;
}
