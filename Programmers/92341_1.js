function toMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function solution(fees, records) {
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const inTimes = new Map();
  const totalTimes = new Map();
  const endOfDay = 23 * 60 + 59;

  for (const record of records) {
    const [time, car, status] = record.split(" ");
    const minutes = toMinutes(time);

    if (status === "IN") {
      inTimes.set(car, minutes);
    } else {
      const inTime = inTimes.get(car);
      const duration = minutes - inTime;
      totalTimes.set(car, (totalTimes.get(car) || 0) + duration);
      inTimes.delete(car);
    }
  }

  for (const [car, start] of inTimes) {
    const duration = endOfDay - start;
    totalTimes.set(car, (totalTimes.get(car) || 0) + duration);
  }

  return [...totalTimes.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, total]) => {
      if (total <= baseTime) {
        return baseFee;
      }
      const extraTime = total - baseTime;
      return baseFee + Math.ceil(extraTime / unitTime) * unitFee;
    });
}
