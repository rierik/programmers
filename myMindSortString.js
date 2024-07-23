// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  return strings.sort((a, b) => {
    console.log(`a:: ${a}, b:: ${b}`);
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;

    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}
console.log(solution(['sun', 'bed', 'car', 'vadkc'], 1));
