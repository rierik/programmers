//https://school.programmers.co.kr/learn/courses/30/lessons/81301
function solution(s) {
  const spellNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var answer = s;

  for (let i = 0; i <= spellNum.length; i++) {
    let arr = answer.split(spellNum[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

console.log(solution('one4seveneight'));

//다른풀이
function solution(s) {
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9);
  return parseInt(s);
}
