//https://school.programmers.co.kr/learn/courses/30/lessons/131127
function solution(want, number, discount) {
  var answer = 0;

  const matched = Object.fromEntries(want.map((item, index) => [item, number[index]]));

  for (let start = 0; start <= discount.length - 10; start++) {
    const tempMatched = { ...matched };

    // 10일간의 할인을 확인하면서 원하는 제품을 맞춰봄
    for (let i = start; i < start + 10; i++) {
      if (tempMatched[discount[i]] > 0) {
        tempMatched[discount[i]] -= 1;
      }
    }

    if (Object.values(tempMatched).every((value) => value === 0)) {
      answer++;
    }
    console.log('tempMatched', tempMatched);
  }

  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    ['chicken', 'apple', 'apple', 'banana', 'rice', 'apple', 'pork', 'banana', 'pork', 'rice', 'pot', 'banana', 'apple', 'banana'],
  ),
); // 3

// console.log(solution(['apple'], [10], ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana'])); //0
