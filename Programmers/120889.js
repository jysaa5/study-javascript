// 삼각형의 완성조건(1)

function solution(sides) {
  let answer = 0;

  sides.sort((a, b) => a - b);

  answer = sides[0] + sides[1] > sides[2] ? 1 : 2;

  return answer;
}
