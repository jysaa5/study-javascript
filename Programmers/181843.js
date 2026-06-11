// 부분 문자열인지 확인하기

function solution(my_string, target) {
  let answer = 0;

  if (my_string.includes(target)) {
    answer = 1;
  }

  return answer;
}
