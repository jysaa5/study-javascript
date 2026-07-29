// 꼬리 문자열

function solution(str_list, ex) {
  let answer = "";

  answer = str_list.reduce((acc, cur) => (acc += cur.includes(ex) ? "" : cur), "");

  return answer;
}
