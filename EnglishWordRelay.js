//https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const stackWords = []; // 단어 저장 배열

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const previousWord = words[i - 1];

    // 중복된 단어가 등장 또는 끝말이 이어지지 않는 경우
    if (stackWords.includes(currentWord) || (previousWord && previousWord.charAt(previousWord.length - 1) !== currentWord.charAt(0))) {
      const person = (i % n) + 1;
      const turn = Math.ceil((i + 1) / n);
      return [person, turn];
    }

    stackWords.push(currentWord);
  }

  // 끝말잇기를 다 진행했으면 [0, 0] 반환
  return [0, 0];
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ]),
);
