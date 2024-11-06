//https://school.programmers.co.kr/learn/courses/30/lessons/12951
function solution(s) {
  var answer = '';
  let arr = [];

  arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
    const spellArr = arr[i].split('');
    spellArr[0] = spellArr[0].toUpperCase();

    for (let j = 1; j < spellArr.length; j++) {
      spellArr[j] = spellArr[j].toLowerCase();
    }

    arr[i] = spellArr.join('');
  }

  return arr.join(' ');
}

//최적화 실패로 다시 푼 풀이
function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      if (word.length === 0) return word;
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log(solution('3people unFollowed me')); //3people Unfollowed Me
