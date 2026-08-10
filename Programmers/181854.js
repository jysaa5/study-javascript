// 배열의 길이에 따라 다른 연산하기

function solution(arr, n) {
    let answer = [];
    
    answer = arr.map((a, i) => (arr.length % 2 === 0 ? i%2 !== 0 : i%2 === 0) ? a + n : a);
    
    return answer;
}