// 글자 이어 붙여 문자열 만들기

function solution(my_string, index_list) {
  let answer = "";

  for (const num of index_list) {
    answer += my_string[num];
  }

  return answer;
}
