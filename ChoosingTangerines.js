//https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(k, tangerine) {
  const sortingTangerine = tangerine.sort((a, b) => a - b);

  let obj = {};
  let num = 1;

  for (const i of sortingTangerine) {
    console.log('obj[i] || 0', obj[i]);
    obj[i] = (obj[i] || 0) + 1;
  }

  let sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  console.log(sortedEntries);

  let count = 0;
  let result = 0;

  for (let [size, amount] of sortedEntries) {
    count += amount;
    result++;
    if (count >= k) {
      break;
    }
  }

  return result;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));

// console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
// console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
