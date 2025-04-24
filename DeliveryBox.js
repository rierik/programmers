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

//뒤집어서 풀어서 효율 좋게 만들기
// shift와 unshift보다 push와 pop이 더 효율적이다.
function solution(order) {
  let answer = 0;
  const subBelt = [];
  let box = 1;

  while (box <= order.length) {
    subBelt.push(box);

    console.log(subBelt);

    while (subBelt.length > 0 && subBelt[arr.length - 1] === order[answer]) {
      subBelt.pop();
      answer++;
    }

    box++;
  }

  return answer;
}
console.log(solution([5, 4, 3, 2, 1])); // 2
