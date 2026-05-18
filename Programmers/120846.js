// 합성수 찾기

function solution(n) {
  let answer = 0;
  let numberSet = new Set();

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.floor(n / i); j++) {
      if (i * j <= n) {
        numberSet.add(i * j);
      }
    }
  }

  answer = numberSet.size;
  return answer;
}
