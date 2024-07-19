function solution(numbers) {
  var answer = [];
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (i !== j) {
        temp.push(numbers[i] + numbers[j]);
      }
    }
  }

  const set = new Set(temp);
  answer = [...set];

  answer.sort((a, b) => a - b);

  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
