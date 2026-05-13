// 가장 큰 수 찾기

function solution(array) {
  let answer = [];

  let maxNumber = 0;
  let maxNumberIndex = 0;

  for (let i = 0; i < array.length; i++) {
    maxNumber = Math.max(array[i], maxNumber);
    if (maxNumber === array[i]) {
      maxNumberIndex = i;
    }
  }

  answer = [maxNumber, maxNumberIndex];

  return answer;
}