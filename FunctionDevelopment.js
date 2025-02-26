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

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
