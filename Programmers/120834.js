function solution(age) {
  let answer = "";
  let alphabet = new Map();

  const start = "a".charCodeAt(0);

  for (let i = 0; i <= 9; i++) {
    alphabet.set(String(i), String.fromCharCode(start + i));
  }

  const ageString = String(age).split("");

  for (let j = 0; j < String(age).length; j++) {
    answer += alphabet.get(ageString[j]);
  }

  return answer;
}
