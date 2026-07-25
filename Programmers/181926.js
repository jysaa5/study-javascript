// 수 조작하기 1

function solution(n, control) {
  let answer = n;

  const list = control.split("");

  for (let i = 0; i < list.length; i++) {
    if (list[i] === "w") {
      answer += 1;
    } else if (list[i] === "s") {
      answer -= 1;
    } else if (list[i] === "d") {
      answer += 10;
    } else if (list[i] === "a") {
      answer -= 10;
    }
  }

  return answer;
}
