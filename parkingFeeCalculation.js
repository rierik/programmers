//https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  var answer = [];
  const parkingLot = new Map(); // 차량번호, 주차시간
  const parkingTime = new Map(); // 차량번호, 주차시간(분)

  // fees = [기본시간, 기본요금, 단위시간, 단위요금]
  const [defaultTime, defaultFee, unitTime, unitFee] = fees; // 기본시간, 기본요금, 단위시간, 단위요금
  const lastTime = 23 * 60 + 59; // 마지막 시간
  
  // records = ["시각 차량번호 입출차여부"]
  records.forEach((record) => {
    const [time, carNumber, inOut] = record.split(' ');
    const [hour, minute] = time.split(':').map(Number); // 시, 분

    const totalTime = hour * 60 + minute; // 총 주차시간 (분)

    if (inOut === 'IN') {
      parkingLot.set(carNumber, totalTime); // 차량번호와 주차시간 저장

      console.log('parkingLot',parkingLot)
    } else {
      const inTime = parkingLot.get(carNumber); // 입차시간
      const parkedTime = totalTime - inTime; // 주차시간(분)

      console.log('inTime,parkedTime',inTime,parkedTime)
      parkingTime.set(carNumber, (parkingTime.get(carNumber) || 0) + parkedTime); // 차량번호와 주차시간(분) 저장
      parkingLot.delete(carNumber); // 차량번호 삭제

      console.log('parkingTime,',parkingTime,parkingLot)
    }
  }

  );

  // 출차하지 않은 차량 처리
  parkingLot.forEach((inTime, carNumber) => {
    const parkedTime = lastTime - inTime; // 주차시간(분)
    parkingTime.set(carNumber, (parkingTime.get(carNumber) || 0) + parkedTime); // 차량번호와 주차시간(분) 저장
  });

  // 차량번호 오름차순 정렬
  const sortedCarNumbers = [...parkingTime.keys()].sort((a, b) => a - b);
  // 주차요금 계산
  sortedCarNumbers.forEach((carNumber) => {
    const parkedTime = parkingTime.get(carNumber); // 주차시간(분)
    let fee = defaultFee; // 기본요금

    if (parkedTime > defaultTime) {
      const extraTime = Math.ceil((parkedTime - defaultTime) / unitTime); // 추가시간
      fee += extraTime * unitFee; // 추가요금
    }

    answer.push(fee); // 주차요금 저장
  });

  return answer;
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:00 5961 IN", "23:00 5961 OUT"])); // [14600, 34400, 5000]