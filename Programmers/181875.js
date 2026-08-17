// 배열에서 문자열 대소문자 변환하기

function solution(strArr) {
  let answer = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 !== 0) {
      answer.push(strArr[i].toUpperCase());
    } else {
      answer.push(strArr[i].toLowerCase());
    }
  }

  return answer;
}
