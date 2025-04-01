//https://school.programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  let answer = 0;
  const dfs = (depth, sum) => {
    if (depth === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  };
  dfs(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); //5
console.log(solution([4, 1, 2, 1], 4)); //2

//다른 사람 풀이
