// 머쓱이보다 키 큰 사람

function solution(array, height) {
  let answer = 0;

  for (const h of array) {
    if (h > height) {
      answer++;
    }
  }

  return answer;
}
