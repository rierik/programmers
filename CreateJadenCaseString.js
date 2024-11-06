function solution(s) {
  var answer = '';
  let arr = [];

  arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
    const spellArr = arr[i].split('');
    let spell = '';
    spellArr[0] = spellArr[0].toUpperCase();
    for (let j = 1; j < spellArr.length; j++) {
      spellArr[j] = spellArr[j].toLowerCase();
    }
    arr[i] = spellArr.join('');
  }
  return arr.join(' ');
}

console.log(solution('3people unFollowed me')); //3people Unfollowed Me
