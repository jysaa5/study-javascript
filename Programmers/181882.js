// 조건에 맞게 수열 변환하기 1

function solution(arr) {
  let answer = [];

  for (const num of arr) {
    if (num >= 50 && num % 2 === 0) {
      answer.push(num / 2);
    } else if (num < 50 && num % 2 !== 0) {
      answer.push(num * 2);
    } else {
      answer.push(num);
    }
  }

  return answer;
}
