// ad 제거하기

function solution(strArr) {
  let answer = [];

  answer = strArr.filter((str) => !str.includes("ad"));

  return answer;
}
