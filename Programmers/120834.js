// 외계행성의 나이

function solution(age) {
  let answer = "";
  let alphabet = new Map();

  const start = "a".charCodeAt(0);
  const end = "j".charCodeAt(0);

  for (let i = 0; i <= 9; i++) {
    alphabet.set(String(i), String.fromCharCode("a".charCodeAt(0) + i));
  }

  const ageString = String(age).split("");

  for (let j = 0; j < String(age).length; j++) {
    answer += alphabet.get(ageString[j]);
  }

  return answer;
}
