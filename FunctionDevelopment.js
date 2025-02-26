//https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  var answer = [];

  let prevGaugeArr = [];
  let curGauge = 0;
  for (let i = 0; i < progresses.length; i++) {
    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      curGauge++;
    }
    prevGaugeArr.push(curGauge);
    curGauge = 0;
  }

  let count = 1;
  let prev = prevGaugeArr[0];

  //[7,3,9]
  for (let i = 1; i < prevGaugeArr.length; i++) {
    if (prevGaugeArr[i] <= prev) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      prev = prevGaugeArr[i];
    }
  }
  answer.push(count);

  return answer;
}

//다른 풀이
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  console.log(days); //[7,3,9]

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
