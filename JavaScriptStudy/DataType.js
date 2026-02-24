//  변수 선언과 할당
const a = "abc";

// 불변성
a = a + "def";

const b = 5;
const c = 5;
b = 7;

// 참조형 데이터의 할당 & 재할당
const obj = {
  a: 1,
  b: "bbb",
};

obj.a = 2;

// 중첩 객체
const obj1 = {
  x: 3,
  arr: [3, 4, 5],
};

// 재할당
obj.arr = "str";

// 변수 복사
const a1 = 10;
const b1 = a1;
const obj2 = { c: 10, d: "ddd" };
const obj3 = obj2;

// 변수 복사 이후 값 변경 결과 비교
const a2 = 10;
const b2 = a2;
const obj4 = { c: 10, d: "ddd" };
const obj5 = obj4;

b2 = 15;
obj4.c = 20;
