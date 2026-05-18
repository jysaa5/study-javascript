// 2차원으로 만들기

function solution(num_list, n) {
  let answer = [[]];
  answer = Array.from({ length: Math.ceil(num_list.length / n) }, () => []);

  for (let i = 0; i < answer.length; i++) {
    for (let j = i * n; j < i * n + n; j++) {
      answer[i].push(num_list[j]);
    }
  }

  return answer;
}
