//https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  var answer = [];
  const stringArr = s.split('');

  stringArr.reduce((lastSeen, char, index) => {
    if (lastSeen[char] !== undefined) {
      answer.push(index - lastSeen[char]);
    } else {
      answer.push(-1);
    }
    lastSeen[char] = index; // 현재 위치를 lastSeen에 업데이트
    return lastSeen;
  }, {});

  return answer;
}

console.log(solution('banana'));

function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}

const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
