// 인덱스 바꾸기

function solution(my_string, num1, num2) {
  let answer = "";

  const list = my_string.split("");
  const firstLetter = list[num1];
  const secondLetter = list[num2];

  for (let i = 0; i < list.length; i++) {
    if (i === num1) {
      answer += list[num2];
    } else if (i === num2) {
      answer += list[num1];
    } else {
      answer += list[i];
    }
  }

  return answer;
}
