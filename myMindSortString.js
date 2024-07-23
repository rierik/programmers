// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  return strings.sort((a, b) => {
    console.log(`a:: ${a}, b:: ${b}`);
    // console.log(`a:: ${a[n]}, b:: ${b[n]}`);
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;

    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}
console.log(solution(['sed', 'bed', 'car', 'vadkc'], 1));

//다른 풀이
function solution(strings, n) {
  return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
      return (a > b) - (a < b);
    } else {
      return (chr1 > chr2) - (chr1 < chr2);
    }
  });
}

function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => (s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])));
}
