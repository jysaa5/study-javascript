// 조건에 맞게 수열 변환하기 3

function solution(arr, k) {
  let answer = [];

  if (k % 2 === 0) {
    answer = arr.map((a) => a + k);
  } else {
    answer = arr.map((a) => a * k);
  }

  return answer;
}
