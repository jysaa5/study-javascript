// 배열의 유사도

function solution(s1, s2) {
  let answer = 0;

  for (let word of s1) {
    if (s2.includes(word)) {
      answer++;
    }
  }

  return answer;
}