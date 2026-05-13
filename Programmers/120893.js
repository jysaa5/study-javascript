// 대문자와 소문자

function solution(my_string) {
  let answer = "";

  let regUpper = /[A-Z]/;
  let regLower = /[a-z]/;

  answer = my_string
    .split("")
    .map((str) => {
      if (regUpper.test(str)) {
        return str.toLocaleLowerCase();
      } else if (regLower.test(str)) {
        return str.toLocaleUpperCase();
      } else {
        return str;
      }
    })
    .join("");

  return answer;
}
