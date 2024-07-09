//https://school.programmers.co.kr/learn/courses/30/lessons/181934
function solution(ineq, eq, n, m) {
  var answer = 0;

  if (ineq === '>' && eq === '=') {
    answer = n >= m ? 1 : 0;
  } else if (ineq === '<' && eq === '=') {
    answer = n <= m ? 1 : 0;
  } else if (ineq === '>' && eq === '!') {
    answer = n > m ? 1 : 0;
  } else if (ineq === '<' && eq === '!') {
    answer = n < m ? 1 : 0;
  }

  return answer;
}

//다른 풀이
function solution(ineq, eq, n, m) {
  const comparisons = {
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b,
    '>!': (a, b) => a > b,
    '<!': (a, b) => a < b,
  };

  const operator = ineq + eq;
  console.log('comparisons[operator](n, m) :: ', comparisons[operator]);
  return comparisons[operator](n, m) ? 1 : 0;
}
console.log(solution('>', '=', 5, 3)); // 1
console.log(solution('<', '=', 5, 3)); // 0
console.log(solution('>', '!', 5, 3)); // 1
console.log(solution('<', '!', 5, 3)); // 0
