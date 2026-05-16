function solution(rsp) {
  let answer = "";

  const rockPaperScissors = rsp.split("");

  for (let r of rockPaperScissors) {
    if (r === "2") {
      answer += "0";
    } else if (r === "0") {
      answer += "5";
    } else {
      answer += "2";
    }
  }

  return answer;
}
