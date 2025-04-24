//https://school.programmers.co.kr/learn/courses/30/lessons/131704
function solution(order) {
  var answer = 0;

  const subBelt = [];

  for (i = 0; i < order.length; i++) {
    if (order[answer] !== subBelt[0]) {
      subBelt.unshift(i + 1);
    }
    while (subBelt.length > 0 && order[answer] == subBelt[0]) {
      subBelt.shift();
      answer++;
    }
  }
  return answer;
}

console.log(solution([5, 4, 3, 2, 1])); // 2
