// 주차 요금 계산

function getDiffTime(start, end) {
  const startTime = start
    .split(":")
    .map((str) => Number(str))
    .reduce((acc, cur, index) => (index === 0 ? (acc += cur * 60) : (acc += cur)), 0);
  const endTime = end
    .split(":")
    .map((str) => Number(str))
    .reduce((acc, cur, index) => (index === 0 ? (acc += cur * 60) : (acc += cur)), 0);

  return endTime - startTime;
}

// fees: 기본 시간, 기본 요금, 단위 시간, 단위 요금
// records: 시각, 차량번호, 내역
function solution(fees, records) {
  let answer = [];

  const cars = new Map();
  const result = new Map();

  const [defaultTime, defaultFee, unitTime, unitFee] = fees;

  for (let record of records) {
    const line = record.split(" ");
    const [time, car, status] = line;

    if (cars.get(car)) {
      result.set(car, (result.get(car) ?? 0) + getDiffTime(cars.get(car), time));
      cars.delete(car);
    } else {
      cars.set(car, time);
    }
  }

  for (let [key, value] of cars) {
    result.set(key, (result.get(key) ?? 0) + getDiffTime(value, "23:59"));
    cars.delete(key);
  }

  const sortedArray = [...result.entries()].sort((a, b) => a[0] - b[0]);
  const sortedMap = new Map(sortedArray);

  for (let [key, value] of sortedMap) {
    const minutes = value - defaultTime;
    answer.push(minutes <= 0 ? defaultFee : defaultFee + Math.ceil(minutes / unitTime) * unitFee);
  }

  return answer;
}
