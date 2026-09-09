// 피로도

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

function solution(k, dungeons) {
  let answer = 0;
  let matrix = [];

  for (let i = 0; i < dungeons.length; i++) {
    matrix.push(i);
  }

  let indexList = getPermutations(matrix, dungeons.length);
  let result = [];

  for (let j = 0; j < indexList.length; j++) {
    let fatigue = k;
    let count = 0;

    for (let n = 0; n < indexList[0].length; n++) {
      const [min, spend] = dungeons[indexList[j][n]];

      if (fatigue >= min) {
        fatigue -= spend;
        count++;
      } else {
        break;
      }
    }

    result.push(count);
  }

  answer = Math.max(...result);

  return answer;
}
