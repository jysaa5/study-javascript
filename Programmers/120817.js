// 배열의 평균값

function solution(numbers) {
  let answer = 0;

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  answer = sum / numbers.length;

  return answer;
}
