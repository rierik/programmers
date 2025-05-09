function solution(s) {
  let num = 1;
  let answer = '';

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      num++;
    } else {
      answer += s[i - 1] + num;
      num = 1;
    }
  }

  answer += s[s.length - 1] + num;

  return answer;
}
console.log(solution('aaaabbbbbcccd'));
