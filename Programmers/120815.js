// 피자 나눠 먹기 (2)

function solution(n) {
  let answer = 1;
  const SLICE = 6;

  if (n % SLICE === 0) {
    answer = n / SLICE;
  } else {
    while ((answer * SLICE) % n !== 0) {
      answer++;
    }
  }

  return answer;
}
