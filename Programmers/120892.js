// 암호 해독

function solution(cipher, code) {
  let answer = "";

  const list = cipher.split("");

  for (let i = 0; i < list.length; i++) {
    if ((i + 1) % code === 0) {
      answer += list[i];
    }
  }

  return answer;
}
