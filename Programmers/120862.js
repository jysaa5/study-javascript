// 최댓값 만들기 (2)

function solution(numbers) {
  let answer = 0;

  if (numbers.length <= 2) {
    return numbers[0] * numbers[1];
  }

  const positive = numbers.filter((num) => num >= 0);
  const negative = numbers.filter((num) => num < 0);

  let positiveMultiplication = 0;
  let negativeMultiplication = 0;

  if (negative.length >= 2) {
    negative.sort((a, b) => a - b);
    negativeMultiplication = negative[0] * negative[1];
  }

  if (positive.length >= 2) {
    positive.sort((a, b) => b - a);
    positiveMultiplication = positive[0] * positive[1];
  }

  answer = Math.max(positiveMultiplication, negativeMultiplication);

  return answer;
}
