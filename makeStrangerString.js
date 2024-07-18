function solution(s) {
  var answer = '';
  let count = 0;
  const splitString = s.split(' ');
  // console.log(splitString);
  splitString.map((s, i) => {
    // console.log(i);
    const oneSpell = s.split('');
    for (const spellIdx in oneSpell) {
      if (spellIdx % 2 === 0) {
        // console.log(oneSpell[spellIdx].toUpperCase());
        answer += oneSpell[spellIdx].toUpperCase();
      } else {
        answer += oneSpell[spellIdx];
      }
    }
    if (count < splitString.length - 1) answer += ' ';
    count++;
  });
  return answer;
}

console.log(solution('try hello world'));
