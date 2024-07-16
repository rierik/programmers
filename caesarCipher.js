function solution(s, n) {
  var answer = '';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = 'abcdefghijklmnopqrstuvwxyz';

  var answer = '';
  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    console.log(text);
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    console.log(index);
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

function solution(s, n) {
  var chars = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ';
  return s
    .split('')
    .map((e) => chars[chars.indexOf(e) + n])
    .join('');
}
console.log(solution('a B z', 4));
