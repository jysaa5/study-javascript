// 369게임

function solution(order) {
  let answer = 0;

  const numbers = String(order)
    .split("")
    .map((num) => Number(num));

  for (let num of numbers) {
    if (num === 3 || num === 6 || num === 9) {
      answer++;
    }
  }

  return answer;
}
