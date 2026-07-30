// 접미사인지 확인하기

function solution(my_string, is_suffix) {
  let answer = 0;

  for (let i = 0; i < my_string.length - 1; i++) {
    const suffix = my_string.slice(i + 1);
    if (suffix === is_suffix) {
      answer = 1;
      return answer;
    }
  }

  return answer;
}
