//https://school.programmers.co.kr/learn/courses/30/lessons/120876
function solution(lines) {
  var answer = 0;
  let lineMap = new Array(200).fill(0);

  for (let i = 0; i < lines.length; i++) {
    let prev = lines[i][0];
    let next = lines[i][1];

    for (let j = prev; j < next; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      answer += 1;
    }
  }

  return answer;
}

function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}

solution([
  [0, 5],
  [3, 9],
  [1, 10],
]);
