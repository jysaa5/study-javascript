// 아이스 아메리카노

function solution(money) {
  let answer = [];

  answer = [Math.floor(money / 5500), money % 5500];

  return answer;
}
