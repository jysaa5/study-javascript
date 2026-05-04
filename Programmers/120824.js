// 짝수 홀수 개수

function solution(num_list) {
  let answer = [];

  let even = 0;
  let odd = 0;

  for (let n of num_list) {
    n % 2 === 0 ? even++ : odd++;
  }

  answer = [even, odd];

  return answer;
}
