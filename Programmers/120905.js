// n의 배수 고르기

function solution(n, numlist) {
  let answer = [];

  for (let num of numlist) {
    if (num % n === 0) {
      answer.push(num);
    }
  }

  return answer;
}
