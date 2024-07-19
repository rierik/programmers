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
