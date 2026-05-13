// 배열 원소의 길이

function solution(strlist) {
  let answer = [];

  for (const list of strlist) {
    answer.push(list.length);
  }

  return answer;
}
