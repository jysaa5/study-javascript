// 프로세스

function solution(priorities, location) {
  let answer = 0;

  const process = Array.from({ length: priorities.length }, (_, i) => String.fromCharCode(i + 97) + i);

  let queue = [...process];

  let count = 0;

  while (priorities.length > 0) {
    const max = Math.max(...priorities);
    const priority = priorities.shift();
    const name = queue.shift();

    if (max === priority) {
      count++;
      if (process.indexOf(name) === location) {
        answer = count;
        return answer;
      }
    } else {
      priorities.push(priority);
      queue.push(name);
    }
  }

  return answer;
}
