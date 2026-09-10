// 피로도

function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  let answer = 0;

  function dfs(fatigue, count) {
    answer = Math.max(answer, count);

    // 모든 던전을 탐험했다면 더 좋은 답은 없음
    if (answer === dungeons.length) return;

    for (let i = 0; i < dungeons.length; i++) {
      const [min, spend] = dungeons[i];

      if (visited[i] || fatigue < min) continue;

      visited[i] = true;
      dfs(fatigue - spend, count + 1);
      visited[i] = false; // 다른 순서에서도 선택할 수 있도록 복원

      if (answer === dungeons.length) return;
    }
  }

  dfs(k, 0);

  return answer;
}
