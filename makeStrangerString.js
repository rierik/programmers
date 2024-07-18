function solution(s) {
  var answer = '';

  const splitString = s.split(' ');

  console.log(splitString);
  splitString.map((s, i) => {
    // console.log(s, '\n', i);
    const oneSpell = s.split('');
    for (const spellIdx in oneSpell) {
      if (spellIdx % 2 === 0) {
        // console.log(oneSpell[spellIdx].toUpperCase());
        answer += oneSpell[spellIdx].toUpperCase();
      } else {
        answer += oneSpell[spellIdx].toLowerCase();
      }
    }

    if (i < splitString.length - 1) answer += ' ';
  });
  console.log(answer);
  return answer;
}

console.log(solution('try    hello world'));
