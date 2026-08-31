// 문자열 바꿔서 찾기

function solution(myString, pat) {
  let answer = 0;

  const changedString = myString
    .split("")
    .map((str) => (str === "A" ? "B" : "A"))
    .join("");

  answer = changedString.includes(pat) ? 1 : 0;

  return answer;
}
