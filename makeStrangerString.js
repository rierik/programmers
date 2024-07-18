function solution(s) {
  var answer = '';

  const splitString = s.split(' ');

  // console.log(splitString);
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

//다른풀이
function toWeirdCase(s) {
  /* 
  s.toUpperCase():

  "HELLO WORLD"
  .replace(/(\w)(\w)/g, function (a) { ... }):

  정규표현식 (\w)(\w)는 "HELLO WORLD"에서 두 개의 연속된 문자를 찾습니다:
  "HE", "LL", "OW", "OR", "LD"
  각 쌍에 대해 첫 번째 문자를 대문자로, 두 번째 문자를 소문자로 변환합니다:
  "HE" -> "He"
  "LL" -> "Ll"
  "OW" -> "Ow"
  "OR" -> "Or"
  "LD" -> "Ld"
  결과 문자열:

  "HeLlO WoRlD"
  */
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

function toWeirdCase(s) {
  return s
    .split(' ')
    .map((i) =>
      i
        .split('')
        .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j))
        .join(''),
    )
    .join(' ');
}

console.log(solution('try    hello world'));
