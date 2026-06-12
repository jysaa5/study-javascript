// 이어 붙인 수

function solution(num_list) {
  let answer = 0;
  let odd = "";
  let even = "";

  for (let num of num_list) {
    if (num % 2 !== 0) {
      odd += String(num);
    } else {
      even += String(num);
    }
  }

  answer = Number(odd) + Number(even);

  return answer;
}
