// 배열의 원소만큼 추가하기

function solution(arr) {
  let answer = [];

  for (let a of arr) {
    for (let i = 0; i < a; i++) {
      answer.push(a);
    }
  }

  return answer;
}
