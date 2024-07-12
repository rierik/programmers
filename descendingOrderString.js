function solution(s) {
  var answer = '';
  return (answer = s
    .sort((a, b) => a - b)
    .reverse()
    .join(''));
}

console.log(solution('Zbcdefg'));
