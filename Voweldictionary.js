//https://school.programmers.co.kr/learn/courses/30/lessons/84512
function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let words = [];

  function generate(current) {
    if (current.length > 5) return;
    console.log({ words });
    if (current.length > 0) words.push(current);

    for (let i = 0; i < vowels.length; i++) {
      generate(current + vowels[i]);
    }
  }

  generate('');

  return words.indexOf(word) + 1;
}

solution('AAAAE'); //6
