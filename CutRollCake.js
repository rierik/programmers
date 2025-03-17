//https://school.programmers.co.kr/learn/courses/30/lessons/132265
function solution(topping) {
  var answer = 0;
  let once = false;

  for (let i = 1; i < topping.length; i++) {
    let oldRollcake = [...topping];
    let youngRollcake = oldRollcake.splice(0, i);

    youngRollcake = [...new Set(youngRollcake)];
    oldRollcake = [...new Set(oldRollcake)];

    if (youngRollcake.length == oldRollcake.length) {
      answer++;
      once = true;
    }
  }
  return once ? answer : 0;
}

// console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
